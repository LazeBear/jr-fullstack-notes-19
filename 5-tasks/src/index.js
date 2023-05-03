const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.development' });
}

const swaggerUi = require('swagger-ui-express');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
// const cors = require('./middleware/cors');
const router = require('./routes');
const swaggerJsDoc = require('./utils/swagger');
const createLogger = require('./utils/logger');
const logger = createLogger('index.js');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev', {
    stream: logger.stream,
  })
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
app.use(router);

app.listen(PORT, (err) => {
  if (err) logger.error(err);

  logger.info(`server listening on port ${PORT}`);
});

// logging level
// debug
// info
// warn
// error
