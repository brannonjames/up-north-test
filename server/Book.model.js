const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  ISBN: {
    type: Number,
    require: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);