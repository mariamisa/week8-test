const connection = require("../config/connection");

const getTodos = (userId) =>
  connection.query("select * from todos where user_id = $1", [userId]);

module.exports = getTodos;
