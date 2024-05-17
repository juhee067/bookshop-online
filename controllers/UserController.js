const userService = require('../services/userService');
const { StatusCodes } = require('http-status-codes');

const signup = async (req, res) => {
  try {
    const user = req.body;
    await userService.createUser(user);
    res.status(StatusCodes.CREATED).json({ status: 201 });
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '회원가입 중에 오류가 발생했습니다.' });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);

    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ status: 401 });
    }
    const hashPwd = userService.hashPwd(password, user.salt);

    if (user.password !== hashPwd) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ status: 401 });
    }

    const token = userService.generateToken(user.id, user.email, user.password);
    res.cookie('token', token, { httpOnly: true });
    res.status(StatusCodes.OK).json({ status: 200, user: user });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: '로그인 중에 오류가 발생했습니다.' });
  }
};

const reqResetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.findUserByEmail(email);
    if (user) {
      return res
        .status(StatusCodes.OK)
        .json({ email: user.email, msg: '비밀번호 초기화가 요청됐습니다.' });
    }
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: '비밀번호 초기화 요청에 실패 했습니다.' });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: '비밀번호 초기화 요청 중에 문제가 발생했습니다.' });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ status: 404, msg: '회원이 존재하지 않습니다.' });
    }
    await userService.resetPassword(email, password, user.salt);
    res.status(StatusCodes.OK).json({ msg: '비밀번호가 초기화됐습니다.' });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: '비밀번호 초기화 중에 문제가 발생했습니다.' });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const decodedPayload = await userService.getDecodedUser(req, res);
    const user = userService.findUserByEmail(decodedPayload.email);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ status: 404, msg: '회원이 존재하지 않습니다.' });
    }
    res.status(StatusCodes.OK).json({ status: 200, user: user });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: '회원 조회 중에 문제가 발생했습니다.' });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    const updatedUser = req.body;
    const decodedPayload = await userService.getDecodedUser(req, res);
    const user = userService.findUserByEmail(decodedPayload.email);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ status: 404, msg: '회원이 존재하지 않습니다.' });
    }

    await userService.updateUser(updatedUser, decodedPayload.email);
    res.status(StatusCodes.OK).json({ status: 200, msg: '회원정보가 수정되었습니다' });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: '회원 수정 중에 문제가 발생했습니다.' });
  }
};

const deleteUserAccount = async (req, res) => {
  try {
    const decodedPayload = await userService.getDecodedUser(req, res);
    const user = userService.findUserByEmail(decodedPayload.email);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ status: 404, msg: '회원이 존재하지 않습니다.' });
    }

    await userService.deleteUser(decodedPayload.email);
    res.status(StatusCodes.OK).json({ status: 200, msg: '회원이 삭제되었습니다.' });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: '회원 삭제 중에 문제가 발생했습니다.' });
  }
};

module.exports = {
  signup,
  signin,
  reqResetPassword,
  resetPassword,
  getUserInfo,
  updateUserInfo,
  deleteUserAccount,
};
