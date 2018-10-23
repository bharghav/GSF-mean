const express = require('express');


// initialize app
const app = express();

const usersRoutes = require('./api/routes/users');

//Routes with handle server
app.use('/users',usersRoutes);


// app.use((req, res, next) => {
//     res.status(200).json({
//         message : "itworks !"
//     });
// });

module.exports = app;