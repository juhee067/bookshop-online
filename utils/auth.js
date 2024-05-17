const jwt = require('jsonwebtoken');
const validateToken = async (req) => {
  try {
    const receivedToken = req.headers['authorization'];
    if (receivedToken) {
      return jwt.verify(receivedToken, process.env.PRIVATE_KEY);
    }

    throw new ReferenceError('token이 없습니다.');
  } catch (err) {
    console.log(err.name, err.message);
    return err;
  }
};

module.exports = {
  validateToken,
};
