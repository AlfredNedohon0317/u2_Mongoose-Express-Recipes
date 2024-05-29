const mongoose = require('mongoose');
const { Schema } = mongoose;

const DirectionSchema = new Schema({
  stepNumber: { type: Number, required: true },
  description: { type: String, required: true },
  recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' }
});

module.exports = mongoose.model('Direction', DirectionSchema);
