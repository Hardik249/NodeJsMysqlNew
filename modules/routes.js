console.log('modules/routes');
const express = require('express');
const routes = express();

const users = require('./users/usersroutes.js');
const products = require('./products/productsroutes.js');
const carts = require('./carts/cartsroutes.js');
const wishes = require('./wishes/wishesRoutes.js');

routes.use('/users', users);
routes.use('/products', products);
routes.use('/carts', carts);
routes.use('/wishes', wishes);

module.exports = routes;