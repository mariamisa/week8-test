const connection = require("../config/connection");

const addTodo = (userId, description) =>
  connection.query(
    "insert into todos(user_id,description) values($1,$2) returning *",
    [userId, description]
  );

module.exports = addTodo;
