const express = require('express');
const router = express.Router();
const auth = require('../auth')

clientsController = require('../controllers/clients');

router.get('/', clientsController.clients_get_all);

module.exports = router;