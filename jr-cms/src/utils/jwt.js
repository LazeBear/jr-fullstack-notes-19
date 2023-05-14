const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

// if (!JWT_KEY), throw error or exit process

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1d' });
};

const validateToken = (token) => {
  // try {
  //   const decoded = jwt.verify(token, JWT_KEY);
  //   return decoded;
  // } catch(e) {
  //   return null;
  // }
  return jwt.verify(token, JWT_KEY);
};

module.exports = {
  generateToken,
  validateToken,
};
