const { sign } = require('jsonwebtoken');

const signToken = (userId) =>
  new Promise((res, rej) => {
    sign({ userId }, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        rej(err);
      } else {
        res(token);
      }
    });
  });

module.exports = signToken;
