require('dotenv').config();
const app = require('./app');
const connectToDatabase = require('./utils/db');

connectToDatabase().then(() => {
  app.listen(8000, () => {
    console.log('server listening on port 8000');
  });
});
