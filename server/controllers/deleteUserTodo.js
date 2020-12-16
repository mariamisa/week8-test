const { deleteTodo } = require("../database/queries");

const deleteUserTodo = (req, res, next) => {
  const { userId } = req;
  const { todoId } = req.params;

  deleteTodo(todoId, userId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};

module.exports = deleteUserTodo;
