const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://gsfadmin:gsfadmin@cluster0-shard-00-00-qjhhz.mongodb.net:27017,cluster0-shard-00-01-qjhhz.mongodb.net:27017,cluster0-shard-00-02-qjhhz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
{
    useNewUrlParser: true
});
const db = mongoose.connection;

// initialize app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use(cors());

const usersRoutes = require('./api/routes/users');

//Routes with handle server
app.use('/users',usersRoutes);


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});
// app.use((req, res, next) => {
//     res.status(200).json({
//         message : "itworks !"
//     });
// });

module.exports = app;