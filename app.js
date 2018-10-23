const express = require('express');
const bodyParser = require('body-parser');

// initialize app
const app = express();

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