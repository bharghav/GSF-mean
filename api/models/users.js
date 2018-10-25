const mongoose = require('mongoose');

//users scheme
const usersSchema = mongoose.Schema({
    //_id: mongoose.Types.ObjectId,
    name: {
        type: String

    },
    city: {
        type: String

    },
    amount: {
        type: Number

    }
});

module.exports = mongoose.model('Users', usersSchema);