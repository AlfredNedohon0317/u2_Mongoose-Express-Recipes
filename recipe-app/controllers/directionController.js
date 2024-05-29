const Direction = require('../models/Direction');

exports.getAllDirections = async (req, res) => {
  try {
    const directions = await Direction.find().populate('recipe');
    res.json(directions);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getDirectionById = async (req, res) => {
  try {
    const direction = await Direction.findById(req.params.id).populate('recipe');
    res.json(direction);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createDirection = async (req, res) => {
  try {
    const newDirection = new Direction(req.body);
    const savedDirection = await newDirection.save();
    res.json(savedDirection);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateDirection = async (req, res) => {
  try {
    const updatedDirection = await Direction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDirection);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteDirection = async (req, res) => {
  try {
    await Direction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Direction deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
