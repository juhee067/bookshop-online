const jwt = require('jsonwebtoken');
const validateToken = async (req) => {
  try {
    const receivedToken = req.headers['authorization'];
    if (receivedToken) {
      return jwt.verify(receivedToken, process.env.PRIVATE_KEY);
    }
  } catch (err) {
    return err;
  }
};

module.exports = {
  validateToken,
};
