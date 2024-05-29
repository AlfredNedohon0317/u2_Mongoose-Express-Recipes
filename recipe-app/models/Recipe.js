const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
  ingredients: [{ name: String, quantity: String }],
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  vegan: { type: Boolean, default: false },
  glutenFree: { type: Boolean, default: false },
  kosher: { type: Boolean, default: false },
  halal: { type: Boolean, default: false },
  ovenTemperature: { type: Number }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
