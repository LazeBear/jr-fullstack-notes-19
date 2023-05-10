const { Schema, model } = require('mongoose');

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
  },
  // courses
});

const Student = model('Student', studentSchema); // collection name: students

module.exports = Student;
