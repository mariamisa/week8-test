const { addTodo } = require("../database/queries");

const addNewTodo = (req, res, next) => {
  const { userId } = req;
  const { description } = req.body;

  addTodo(userId, description)
    .then(({ rows }) => {
      res.json({ status: 201, data: rows });
    })
    .catch(next);
};

module.exports = addNewTodo;
