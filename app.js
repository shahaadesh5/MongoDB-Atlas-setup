//importing set of packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //body-parser used to get form data

//importing api route
const userRoute = require('./api/routes/user');

//setting boy-parser form-data limit 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
//running the route
app.use('/user', userRoute);

//creating connection with MongoDB Atlas database
mongoose.connect('YOUR MONGODB ATLAS CONNECTION STRING',{ useNewUrlParser: true});

module.exports = app;