const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  nationality: String,
  position: String,
  goals: Number,
  assists: Number
});

module.exports = mongoose.model('Player', playerSchema);
