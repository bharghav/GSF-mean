const Users = require('../models/users');
const bcrypt = require('bcrypt');

exports.register = (req,res) =>{
    
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
            return err.status(500).json({
                error: err
            })
        }else{
            const users = new Users({
                email: req.body.email,
                password: hash
            });
            users.save()
                 .then(result => {
                     res.status(200).json({
                         message: "User Created",
                         createdUser: {
                            email: result.email,
                            password: result.password
                        },
                        request: {
                            type: 'POST'
                        }
                     })
                 })
                 .catch(err => {
                     res.status(500).json({
                         error: err
                     })
                 });
        }

    
    });

}