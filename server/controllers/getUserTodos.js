const { getTodos } = require("../database/queries");

const getUserTodos = (req, res, next) => {
  const { userId } = req;

  getTodos(userId)
    .then(({ rows }) => {
      res.json({ status: 200, data: rows });
    })
    .catch(next);
};

module.exports = getUserTodos;
