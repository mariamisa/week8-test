const bcrypt = require("bcrypt");

const { validationSchema, signToken, boomify } = require("../utils");
const { getUserByEmail } = require("../database/queries");

const login = (req, res, next) => {
  const { email, password } = req.body;

  let id;
  validationSchema
    .validateAsync({ email, password })
    .catch((err) => {
      throw boomify(400, err.details[0].message);
    })
    .then(() => getUserByEmail(email))
    .then(({ rows, rowCount }) => {
      if (rowCount === 0) {
        throw boomify(400, "user doesn't  exist");
      }

      const user = rows[0];
      const hashedPassword = user.password;

      id = user.id;

      return bcrypt.compare(password, hashedPassword);
    })
    .then((isAuth) => {
      if (!isAuth) {
        throw boomify(400, "incorrect password");
      }
      return signToken(id);
    })
    .then((token) =>
      res
        .cookie("token", token)
        .json({ status: 200, message: "logged in successfully" })
    )
    .catch(next);
};

module.exports = login;
