const connection = require("../config/connection");

const addUser = (email, password) =>
  connection.query("insert into users(email,password) values($1,$2)", [
    email,
    password,
  ]);

module.exports = addUser;
