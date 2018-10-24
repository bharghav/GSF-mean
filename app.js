const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://gsf-mean:gsf_mean@123!!@ds139243.mlab.com:39243/gsf-mean', 
{ useNewUrlParser: true });
//const db = mongoose.connection;


// initialize app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json());

app.use(cors());

const usersRoutes = require('./api/routes/users');

//Routes with handle server
app.use('/users', usersRoutes);


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



module.exports = app;