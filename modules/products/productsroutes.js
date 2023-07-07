console.log('productsroutes');
const express = require('express');
const productsroutes = express();

const productscontrollers = require('./productscontrollers.js');

// usersroutes.get('/users', userscontrollers);
productsroutes.get('/productsList', productscontrollers.productsList);
productsroutes.get('/productsListAll', productscontrollers.productsListAll);
productsroutes.get('/productslist/:id', productscontrollers.products);
productsroutes.get('/product/:id', productscontrollers.product);
// productsroutes.post('/signup', productscontrollers.signup);
// productsroutes.post('/login', productscontrollers.login);

module.exports = productsroutes;