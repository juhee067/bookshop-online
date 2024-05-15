import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const userService = {
  generateToken: (id, email, name) => {
    return jwt.sign({ id, email, name }, process.env.PRIVATE_KEY, {
      expiresIn: '1h',
      issuer: 'juhee',
    });
  },
  hashPwd: (res, salt) => {
    const { password } = req.body;
    return crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');
  },
};
