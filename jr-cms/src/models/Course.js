// name
// description

const { Schema, model } = require('mongoose');

module.exports = model(
  'Course',
  new Schema({
    _id: {
      // course code -> COMP1001, PYTH10001
      type: String,
      required: true,
      alias: 'code', // alias -> 别名, virtual property
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'This is a description',
    },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  })
);
