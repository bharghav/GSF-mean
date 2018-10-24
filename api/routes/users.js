const express = require('express');
const router = express.Router();



const UsersController = require('../controllers/users');
// get All users
router.get('/', UsersController.users_get_all);


module.exports = router;