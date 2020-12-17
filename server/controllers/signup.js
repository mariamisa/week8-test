const bcrypt = require('bcrypt');

const { validationSchema, boomify } = require('../utils');
const { getUserByEmail, addUser } = require('../database/queries');

const signup = (req, res, next) => {
  const { email, password } = req.body;

  validationSchema
    .validateAsync({ email, password })
    .catch((err) => {
      throw boomify(400, err.details[0].message);
    })
    .then(() => getUserByEmail(email))
    .then(({ rowCount }) => {
      if (rowCount > 0) {
        throw boomify(409, 'email is already in use');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => addUser(email, hashedPassword))
    .then(() =>
      res.status(201).json({ status: 201, message: 'signup successfully' })
    )
    .catch(next);
};

module.exports = signup;
