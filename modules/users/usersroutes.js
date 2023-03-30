console.log('usersroutes');
const express = require('express');
const usersroutes = express();

const userscontrollers = require('./userscontrollers.js');

// usersroutes.get('/users', userscontrollers);
usersroutes.get('/users', userscontrollers.users);

module.exports = usersroutes;