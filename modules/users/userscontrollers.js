console.log('userscontroller');
const bcrypt = require('bcrypt');
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

exports.register = async (req, res) => {
    try {
        const saltRounds = 10;
        // const myPlaintextPassword = 's0/\/\P4$$w0rD';
        const myPlaintextPassword = req.body.password;
        // const someOtherPlaintextPassword = 'not_bacon';
        let hashPass = await bcrypt.hash(myPlaintextPassword, saltRounds);
        let user = await User.create({
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            name: req.body.name,
            email: req.body.email,
            password: hashPass,
            contact: req.body.contact,
            createdAt: Date.now(),
            updatedAt: ''
            // updatedAt: null
            // updatedAt: Date.now()
        });
        res.status(200).json({
            status : "success users",
            message : "Test api users register try",
            data: user, myPlaintextPassword
        });
    } catch (error) {
        console.error(error);
        let errors = error.errors ? error.errors.map((item)=>item.message) : error;
        res.status(200).json({
            status : "fail users",
            message : "Test api users register catch",
            data: errors
        });
    }
};

exports.login = async (req, res) => {
    try {
        const saltRounds = 10;
        const myPlaintextPassword = req.body.password;
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        // console.log(user)
        // console.log(user.password)
        // let hashPass = await bcrypt.hash(myPlaintextPassword, saltRounds);
        let hashPass = await bcrypt.compare(myPlaintextPassword, user.password);
        // let hashPass = await bcrypt.compareSync(myPlaintextPassword, user.password);
        // console.log(hashPass)
        if (hashPass) {
            res.status(200).json({
                "status" : "success users",
                "message" : "Test api users login try",
                data: user
            });
        } else {
            res.status(200).json({
                "status" : "success users",
                "message" : "user not found",
                // data: user
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail users",
            message : "Test api users login catch",
            data: error
        });
    }
};


// module.exports = userscontrollers;