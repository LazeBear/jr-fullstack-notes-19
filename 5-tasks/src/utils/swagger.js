const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tasks API',
      version: '1.0.0',
      description: 'A simple Express Tasks API',
      contact: {
        name: 'Jorge',
        email: 'example.com',
      },
    },
  },
  apis: ['src/controllers/*.js'],
});
