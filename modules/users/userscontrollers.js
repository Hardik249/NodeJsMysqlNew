console.log('userscontroller');
const express = require('express');
const userscontrollers = express();

// const users = require('../models/users.js');
const User = require('../models/users.js');

// userscontrollers.get('/users', (req, res) => {
//     res.status(200).json({
//         "status" : "success users",
//         "message" : "Test api users"
//     });
// });

exports.users = (req, res) => {
    res.status(200).json({
        "status" : "success users",
        "message" : "Test api users"
    });
};

exports.signup = async (req, res) => {
    try {
        let user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPass,
            contact: req.body.contact,
            // createdAt: Date.now();
        });
        res.status(200).json({
            status : "success users",
            message : "Test api users signup try",
            data: user
        });   
    } catch (error) {
        console.error(error);
    }
};

exports.login = (req, res) => {
    try {
        res.status(200).json({
            "status" : "success users",
            "message" : "Test api users login try"
        });   
    } catch (error) {
        
    }
};


// module.exports = userscontrollers;