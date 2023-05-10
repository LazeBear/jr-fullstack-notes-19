const Joi = require('joi');

const createCourseSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  description: Joi.string().optional(),
  // XXXX1234
  // X1
  code: Joi.string()
    .uppercase()
    .regex(/^[a-zA-Z]+[0-9]+$/)
    .message('Invalid code format')
    .required(),
});

module.exports = {
  createCourseSchema,
};
