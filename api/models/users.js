const mongoose = require('mongoose');

const usersScheme = mongoose.Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('users',usersScheme);