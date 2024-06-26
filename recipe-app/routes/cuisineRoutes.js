const express = require('express');
const router = express.Router();
const cuisineController = require('../controllers/cuisineController');

router.get('/', cuisineController.getAllCuisines);
router.get('/:id', cuisineController.getCuisineById);
router.post('/', cuisineController.createCuisine);
router.put('/:id', cuisineController.updateCuisine);
router.delete('/:id', cuisineController.deleteCuisine);

module.exports = router;
