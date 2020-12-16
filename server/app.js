require('env2')('./config.env');
const { join } = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./router');
const { verifyToken } = require('./utils');

const app = express();

app.use(express.json());
app.use(cookieParser());

// app.use((req, res, next) => {
//   verifyToken(req.cookies.token)
//     .then(() => {
//       express.static(join(__dirname, '..', 'static'));
//     })
//     .catch(() => {
//       res.status(401).send('<h1>Un-Authorized</h1>');
//     });
// });

app.use(express.static(join(__dirname, '..', 'static')));

app.set('port', process.env.PORT || 5000);

app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.status(404).send('<h1>page not found</h1>');
});

module.exports = app;
