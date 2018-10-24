const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/users');

mongoose.model('users',{name: String, city: String, amount: Number});

router.get('/', (req, res, next) => {
        //  res.status(200).json({
        //      message : "Handling get request for /users"
        //  });

        mongoose.model('users').find(function(err,users){
            res.send(users);
        });
     });

router.post('/', (req, res, next) => {
    
    const users = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        city: req.body.city,
        amount: req.body.amount
    });
    users
    .save()
    .then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message : "Handling post request for /users",
        createdUsers : users
    });
});

router.get('/:userId', (req, res, next) => {
    const id =  req.params.userId;
    if(id === 'special'){
        res.status(200).json({
            message : "Discovered Id from users",
            id: id
        });
    }else{
        res.status(200).json({
            message : "you passed an ID"
        });
    }
});

router.patch('/:userId', (req,res,next) => {
    res.status(200).json({
        message: "Updated user"
    });
});

router.delete('/:userId', (req,res,next) => {
    res.status(200).json({
        message: "Delete user"
    });
});

module.exports = router;