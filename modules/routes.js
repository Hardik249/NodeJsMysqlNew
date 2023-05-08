console.log('modules/routes');
const express = require('express');
const routes = express();

const users = require('./users/usersroutes.js');
const products = require('./products/productsroutes.js');
const carts = require('./carts/cartsroutes.js');

routes.use('/users', users);
routes.use('/products', products);
routes.use('/carts', carts);

module.exports = routes;