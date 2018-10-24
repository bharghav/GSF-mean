const mongoose = require('mongoose');

//users scheme
const usersSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    city: String,
    amount: Number
});

module.exports = mongoose.model('Users', usersSchema);