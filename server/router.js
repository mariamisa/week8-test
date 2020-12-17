const router = require('express').Router();

const {
  errorHandler,
  signup,
  login,
  logout,
  getUserTodos,
  addNewTodo,
  deleteUserTodo,
} = require('./controllers');
const { auth } = require('./middlewares');
const { boomify } = require('./utils');

router.post('/signup', signup);
router.post('/login', login);

router.use(auth);

router.get('/logout', logout);
router.get('/todos', getUserTodos);
router.post('/todos', addNewTodo);
router.delete('/todos/:todoId', deleteUserTodo);

router.use((req, res, next) => {
  next(boomify(404, 'resource not found'));
});

router.use(errorHandler);

module.exports = router;
