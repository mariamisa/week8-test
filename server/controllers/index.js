const errorHandler = require('./error');
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const getUserTodos = require('./getUserTodos');
const addNewTodo = require('./addNewTodo');
const deleteUserTodo = require('./deleteUserTodo');

module.exports = {
  errorHandler,
  signup,
  login,
  logout,
  getUserTodos,
  addNewTodo,
  deleteUserTodo,
};
