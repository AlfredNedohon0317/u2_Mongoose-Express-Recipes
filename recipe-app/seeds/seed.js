const mongoose = require('mongoose');
require('dotenv').config();

const Cuisine = require('../models/Cuisine');
const Recipe = require('../models/Recipe');
const Direction = require('../models/Direction');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected for seeding');

    // Clear existing data
    await Cuisine.deleteMany({});
    await Recipe.deleteMany({});
    await Direction.deleteMany({});

    const italian = new Cuisine({ name: 'Italian', origin: 'Italy' });
    const chinese = new Cuisine({ name: 'Chinese', origin: 'China' });

    await italian.save();
    await chinese.save();

    const lasagna = new Recipe({
      title: 'Lasagna',
      cuisine: italian._id,
      ingredients: [{ name: 'Pasta', quantity: '500g' }, { name: 'Tomato Sauce', quantity: '2 cups' }],
      difficulty: 'Medium',
      vegan: false,
      glutenFree: false,
      kosher: false,
      halal: false,
      ovenTemperature: 375
    });

    await lasagna.save();

    const lasagnaDirections = [
      new Direction({ stepNumber: 1, description: 'Boil pasta.', recipe: lasagna._id }),
      new Direction({ stepNumber: 2, description: 'Prepare sauce.', recipe: lasagna._id }),
      new Direction({ stepNumber: 3, description: 'Layer pasta and sauce.', recipe: lasagna._id }),
      new Direction({ stepNumber: 4, description: 'Bake in oven.', recipe: lasagna._id })
    ];

    for (const direction of lasagnaDirections) {
      await direction.save();
    }

    console.log('Seeding completed');
    process.exit();
  })
  .catch(err => console.log(err));
