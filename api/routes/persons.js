const express = require('express');
const router = express.Router();

const PersonsController = require('../controllers/persons');
// get All users
router.get('/', PersonsController.persons_get_all);
// To add new Post for user comment 
router.post('/', PersonsController.add_person);

module.exports = router;