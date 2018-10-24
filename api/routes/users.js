const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');
// get All users
router.get('/', UsersController.users_get_all);
// To add new user
router.post('/', UsersController.add_user);

module.exports = router;