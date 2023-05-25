console.log('usersroutes');
const express = require('express');
const usersroutes = express();

const userscontrollers = require('./userscontrollers.js');
const usersValidation = require('../services/usersValidation.js');

// usersroutes.get('/users', userscontrollers);
usersroutes.get('/users', userscontrollers.users);
usersroutes.post('/register', [usersValidation.registerValidation], userscontrollers.register);
usersroutes.post('/login', [usersValidation.loginValidation], userscontrollers.login);
usersroutes.get('/getprofile/:id', userscontrollers.getProfile);
usersroutes.put('/updateprofile/:id', [usersValidation.updateProfileValidation], userscontrollers.updateProfile);

module.exports = usersroutes;