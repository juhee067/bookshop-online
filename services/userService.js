const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const db = require('../models');
const { validateToken } = require('../utils/auth');
const User = db.users;

const userService = {
  createUser: async (user) => {
    const salt = crypto.randomBytes(10).toString('base64');

    const hashPwd = userService.hashPwd(user.password, salt);
    return await User.create({ ...user, password: hashPwd, salt: salt });
  },
  getUser: async (req, res) => {
    const decodedPayload = await validateToken(req);

    if (decodedPayload instanceof jwt.TokenExpiredError) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: '토큰이 만료됐습니다.' });
    } else if (decodedPayload instanceof jwt.JsonWebTokenError) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: '토큰이 잘못됐습니다' });
    }
    return userService.findUserByEmail(decodedPayload.email);
  },
  updateUser: async (user) => {
    return await User.update({});
  },
  deleteUser: async (userId) => {
    return await User.destroy({ where: { userId } });
  },
  findUserByEmail: async (email) => {
    return await User.findOne({ where: { email } });
  },

  generateToken: (id, email, name) => {
    return jwt.sign({ id, email, name }, process.env.PRIVATE_KEY, {
      expiresIn: '1h',
      issuer: 'juhee',
    });
  },
  hashPwd: (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');
  },
  resetPassword: async (email, password, salt) => {
    const hashPwd = userService.hashPwd(password, salt);
    return await User.update({ password: hashPwd }, { where: { email } });
  },
};

module.exports = userService;
