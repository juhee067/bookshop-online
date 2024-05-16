const userService = require('../services/userService');

const signup = async (req, res) => {
  const user = req.body;

  try {
    await userService.createUser(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 400 });
  }

  res.status(200).json({ status: 200 });
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);
    const hashPwd = userService.hashPwd(password, user.salt);

    if (!user || user.password !== hashPwd) {
      return res.status(401).json({ status: 401 });
    }
    res.status(200).json({ status: 200, user: user });
  } catch (err) {
    console.error('로그인 중 오류 발생:', err);
    res.status(500).json({ message: '서버 오류 발생' });
  }
};

module.exports = {
  signup,
  signin,
};
