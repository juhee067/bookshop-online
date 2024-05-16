const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.users;
const userService = {
  createUser: async (user) => {
    const salt = crypto.randomBytes(10).toString('base64');
    const hashPwd = userService.hashPwd(user.password, salt);
    return await User.create({ ...user, password: hashPwd, salt: salt });
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
};

module.exports = userService;
