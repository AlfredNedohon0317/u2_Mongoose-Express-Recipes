const Cuisine = require('../models/Cuisine');

exports.getAllCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.json(cuisines);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getCuisineById = async (req, res) => {
  try {
    const cuisine = await Cuisine.findById(req.params.id);
    res.json(cuisine);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createCuisine = async (req, res) => {
  try {
    const newCuisine = new Cuisine(req.body);
    const savedCuisine = await newCuisine.save();
    res.json(savedCuisine);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateCuisine = async (req, res) => {
  try {
    const updatedCuisine = await Cuisine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCuisine);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteCuisine = async (req, res) => {
  try {
    await Cuisine.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cuisine deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
