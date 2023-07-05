const { Schema, model } = require('mongoose');

module.exports = model(
  'Note',
  new Schema({
    text: String,
  })
);
