const { validateToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  // const authorization = req.headers.authorization;
  const authorization = req.header('Authorization');
  // Bearer <token>
  if (!authorization) {
    res.status(401).json({ error: 'missing authorization header' });
    return;
  }

  // [token]
  const [prefix, token] = authorization.split(' ');
  if (prefix !== 'Bearer' || !token) {
    res.status(401).json({ error: 'invalid authorization token format' });
    return;
  }

  try {
    const payload = validateToken(token);
    req.user = payload;
    next();
  } catch (e) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }
};
