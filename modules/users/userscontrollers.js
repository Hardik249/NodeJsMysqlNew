console.log('userscontroller');
const express = require('express');
const userscontrollers = express();

const users = require('../models/users.js');

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

// module.exports = userscontrollers;