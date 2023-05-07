require('dotenv').config();
const express = require('express');
const v1Router = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/v1', v1Router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
