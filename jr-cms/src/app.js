const express = require('express');
require('express-async-errors');
const v1Router = require('./routes');
const unknownError = require('./middleware/error/unkownError');
const validationError = require('./middleware/error/validationError');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.sendStatus(200);
});
app.use('/v1', v1Router);

app.use(validationError);
app.use(unknownError);

module.exports = app;
