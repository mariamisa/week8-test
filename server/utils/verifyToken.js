const { verify } = require('jsonwebtoken');

const verifyToken = (token) =>
  new Promise((res, rej) => {
    verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        rej(err);
      } else {
        res(decoded);
      }
    });
  });

module.exports = verifyToken;
