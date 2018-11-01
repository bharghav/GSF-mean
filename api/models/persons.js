const mongoose = require('mongoose');

//persons scheme
const personsSchema = mongoose.Schema({
    //_id: mongoose.Types.ObjectId,
    name: String,
    city: String,
    amount: Number
});



module.exports = mongoose.model('persons', personsSchema);
//var persons = mongoose.model('persons', personsSchema);
//var users = mongoose.model('users', usersSchema);


// module.exports = {
//     persons: persons,
//     users: users
// };