const express = require('express');
const router = express.Router();
const directionController = require('../controllers/directionController');

router.get('/', directionController.getAllDirections);
router.get('/:id', directionController.getDirectionById);
router.post('/', directionController.createDirection);
router.put('/:id', directionController.updateDirection);
router.delete('/:id', directionController.deleteDirection);

module.exports = router;
