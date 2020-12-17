const { verifyToken, boomify } = require('../utils');

const auth = (req, res, next) => {
  const { token } = req.cookies;

  verifyToken(token)
    .then(({ userId }) => {
      req.userId = userId;

      next();
    })
    .catch(() => {
      res.clearCookie('token');
      next(boomify(401, 'unauthorized'));
    });
};

module.exports = auth;
