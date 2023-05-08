console.log('productsroutes');
const express = require('express');
const productsroutes = express();

const productscontrollers = require('./productscontrollers.js');

// usersroutes.get('/users', userscontrollers);
productsroutes.get('/productslist/:project_id', productscontrollers.products);
// productsroutes.post('/signup', productscontrollers.signup);
// productsroutes.post('/login', productscontrollers.login);

module.exports = productsroutes;