const express = require('express');
const router = express.Router();
const auth = require('../auth')

clientsController = require('../controllers/clients');

router.get('/', clientsController.clients_get_all);
router.post('/add', clientsController.add_client);
router.post('/update', clientsController.update_client);


module.exports = router;