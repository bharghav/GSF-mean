const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
         res.status(200).json({
             message : "Handling get request for /users"
         });
     });

router.post('/', (req, res, next) => {
    res.status(200).json({
        message : "Handling post request for /users"
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