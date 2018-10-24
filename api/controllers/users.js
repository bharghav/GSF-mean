const Users = require('../models/users');

exports.users_get_all = (req, res, next) => {

    Users.find(function (err, users) {
        if (err) {
            console.log('error' + err);
        }
        res.send(users);
    });
}