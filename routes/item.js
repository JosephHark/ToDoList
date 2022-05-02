const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');

router.get('/', itemController.getAll);

router.get('/:id', itemController.getSingle);

router.post('/', itemController.createContact);

router.put('/:id', itemController.updateContact);

router.delete('/:id', itemController.deleteContact);

module.exports = router;