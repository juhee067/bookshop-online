const db = require('../models');

const User = db.users;
const signup = async (req, res) => {
  const user = req.body;
  let userData = {
    username: user.username,
    email: user.email,
    password: user.password,
    address: user.address,
    contact: user.contact,
  };
  await User.create(userData).catch((err) => res.status(400).json({ status: 400 }));
  res.status(200).json({ status: 200 });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
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
