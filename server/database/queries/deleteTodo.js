const connection = require("../config/connection");

const deleteTodo = (todoId, userId) =>
  connection.query("delete from todos where id = $1 and user_id = $2", [
    todoId,
    userId,
  ]);

module.exports = deleteTodo;
