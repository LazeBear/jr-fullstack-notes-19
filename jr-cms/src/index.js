require('dotenv').config();
const express = require('express');
require('express-async-errors');
const v1Router = require('./routes');
const connectToDB = require('./utils/db');
const unknownError = require('./middleware/error/unkownError');
const validationError = require('./middleware/error/validationError');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.sendStatus(200);
});
app.use('/v1', v1Router);

app.use(validationError);
app.use(unknownError);

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
