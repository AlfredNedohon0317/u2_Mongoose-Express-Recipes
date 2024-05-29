const mongoose = require('mongoose');

const CuisineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true }
});

module.exports = mongoose.model('Cuisine', CuisineSchema);
