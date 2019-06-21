const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//importing the UserModel schema defined in the model
const UserModel = require('../models/user');

//sending a post request to save data onto MongoDB Atlas collection
router.post('/signup_user', (req, res, next)=>{
    const user = new UserModel({
        _id: new mongoose.Types.ObjectId(), // generates new unique Id for each record
        email: req.body.email, //takes value from form data
        password: req.body.password // takes value from form data
    });
    //saving the data in database and logging it
    user.save().then(result=>{
        console.log(result);
    })
    .catch(err=>console.log(err));
    res.status(201).json({
        message:"User data added to database"
    });
});

//route to get all users from the database
router.get('/allusers', (req, res, next)=>{
    UserModel.find()
    .exec()
    .then(data=>{
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

//exporting the routes
module.exports = router;