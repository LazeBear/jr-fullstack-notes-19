const mongoose = require('mongoose');

const connectToDB = async () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error('CONNECTION_STRING is not set');
    // 正常退出
    // 非正常退出
    // 人为正常退出 （0）
    // 人为非正常退出（1）（2）
    process.exit(1);
  }
  const db = mongoose.connection;
  db.on('error', (error) => {
    console.error(error);
    process.exit(2);
  });
  db.on('connected', () => {
    console.log('Connected to database');
  });
  db.on('disconnected', () => {
    console.log('Disconnected from database');
  });

  return mongoose.connect(connectionString);
};

module.exports = connectToDB;
