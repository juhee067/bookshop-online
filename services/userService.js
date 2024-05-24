const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const db = require('../models');
const { validateToken } = require('../utils/auth');
const User = db.User;

const userService = {
  createUser: async (user) => {
    const salt = crypto.randomBytes(10).toString('base64');
    const hashPwd = userService.hashPwd(user.password, salt);
    return await User.create({ ...user, password: hashPwd, salt: salt });
  },

  getDecodedUser: async (req, res) => {
    const decodedPayload = await validateToken(req);
    return decodedPayload;
  },

  updateUser: async (updatedUser, email) => {
    const [numOfAffectedRows, affectedRows] = await User.update(updatedUser, { where: { email } });
    return affectedRows;
  },

  deleteUser: async (email) => {
    return await User.destroy({ where: { email } });
  },

  findUserByEmail: async (email) => {
    return await User.findOne({ where: { email } });
  },
  findUserIdByEmail: async (email) => {
    return await User.findOne({ where: { email }, attributes: ['user_id'] });
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
