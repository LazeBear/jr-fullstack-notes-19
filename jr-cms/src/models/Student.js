const { Schema, model } = require('mongoose');
const Joi = require('joi');

const studentSchema = new Schema({
  // firstName: String,
  firstName: {
    type: String, // type: 'string'
    required: true,
    // simple validation
    minLength: 2,
    // unique: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [
      {
        validator: (email) => {
          // regex
          // return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          //   email
          // );
          // use validation library instead
          // validator.js Joi yup
          return Joi.string().email().validate(email).error === undefined;
          // return false -> invalid, return true -> valid
        },
        msg: 'Invalid email format',
      },
    ],
  },
  courses: [
    {
      type: String,
      ref: 'Course',
    },
  ],
});

const Student = model('Student', studentSchema); // collection name: students

module.exports = Student;
