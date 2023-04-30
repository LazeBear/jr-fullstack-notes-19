const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // minimum logging level
  // format:
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // colorize is not working when using json format
        winston.format.simple() // simple output
      ),
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
