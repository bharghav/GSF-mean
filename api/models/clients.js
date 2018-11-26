const mongoose = require('mongoose');

const clientsScheme = mongoose.Schema({
    clientId: String,
    clientName: String
});

module.exports = mongoose.model('clients', clientsScheme);