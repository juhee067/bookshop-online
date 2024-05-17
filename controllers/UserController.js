const userService = require('../services/userService');
const { StatusCodes } = require('http-status-codes');
const signup = async (req, res) => {
  const user = req.body;

  try {
    await userService.createUser(user);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.BAD_REQUEST).json({ status: 400 });
  }

  res.status(StatusCodes.CREATED).json({ status: 201 });
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
    console.error('로그인 중 오류 발생:', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: '서버 오류 발생' });
  }
};

const reqResetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userService.findUserByEmail(email);
    if (user) {
      return res
        .status(StatusCodes.OK)
        .json({ email: user.email, msg: '비밀번호 초기화가 요청됐습니다.' });
    }
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: '비밀번호 초기화 요청에 실패 했습니다.' });
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: '비밀번호 초기화 요청 중에 문제가 발생했습니다.' });
  }
};
const resetPassword = async (req, res) => {
  try {
  } catch (err) {}
};

const getUserInfo = async (req, res) => {
  try {
  } catch (err) {}
};
const updateUserInfo = async (req, res) => {
  try {
    await userService.updateUser(user);
  } catch (err) {}
};
const deleteUserAccount = async (req, res) => {
  try {
    await userService.deleteUser(user);
  } catch (err) {}
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
