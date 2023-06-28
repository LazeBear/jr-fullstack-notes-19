require('dotenv').config();
const connectToDB = require('./utils/db');
const app = require('./app');

const PORT = process.env.PORT || 3000;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
