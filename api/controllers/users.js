const Users = require('../models/users');

exports.users_get_all = (req, res, next) => {

    Users.find()
            .select('name city amount _id')
            .exec()
            .then(docs => {
               
                const response = {
                    count: docs.length,
                    users: docs.map(doc => {
                        return {
                            name: doc.name,
                            city: doc.city,
                            amount:doc.amount,
                            type: 'GET'
                        }
                    })
                };
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ error : err });
            });
}

exports.add_user = (req, res) => {
    const userData = req.body;

    var userObj = new Users(userData);
    userObj.save((err) => {
        if(err){
            console.log(err);
            return res.status(400).send({statusCode: 400, message: err.message});
        }
        return res.status(200).send({statusCode: 200, message:'User added successfully'})
    })


}