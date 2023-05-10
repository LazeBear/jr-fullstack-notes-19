require('dotenv').config();
const express = require('express');
const v1Router = require('./routes');
const connectToDB = require('./utils/db');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/v1', v1Router);

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
