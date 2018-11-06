const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let uname = "gsf-mean";
let pasword = "gsfmean@123";
let uri = "mongodb://gsfmean1:gsf123456@ds241133.mlab.com:41133/gsfmean";

const options = {
    useNewUrlParser: true,
};

mongoose.connect(uri, options).then(
    () => {
        console.log('DB connected');
    },
    err => {
        console.log('not connected');

    }
);

const db = mongoose.connection;


// initialize app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json());

app.use(cors());
const auth = require('./api/auth');

const personsRoutes = require('./api/routes/persons');
const userRoutes = require('./api/routes/users');

//Routes with handle server
app.use('/auth', auth.router);
app.use('/persons', personsRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    console.log('enter');
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});



module.exports = app;