const Users = require('../models/users');

exports.users_get_all = (req, res, next) => {

    Users.find(function (err, users) {
        if (err) {
            console.log('error' + err);
        }
        res.send(users);
    });
}

exports.add_user = (req, res) => {
    const userData = req.body;
    if (userData.name != undefined && userData.city != undefined && userData.amount != undefined) {
        var userObj = new Users(userData);
        userObj.save((err) => {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    statusCode: 400,
                    message: err.message
                });
            }
            return res.status(200).send({
                statusCode: 200,
                message: 'User added successfully'
            })
        })

    } else {
        return res.status(400).send({
            statusCode: 400,
            message: 'Invalid Request'
        });
    }



}