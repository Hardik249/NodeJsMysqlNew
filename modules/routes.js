console.log('modules/routes');
const express = require('express');
const routes = express();

const users = require('./users/usersroutes.js');
const products = require('./products/productsroutes.js');
const carts = require('./carts/cartsroutes.js');
const wishes = require('./wishes/wishesRoutes.js');
const userAddress = require('./userAddress/userAddressRoutes.js');
const orders = require('./orders/ordersRoutes.js');
const orderDetails = require('./orderDetails/orderDetailsRoutes.js');

routes.use('/users', users);
routes.use('/products', products);
routes.use('/carts', carts);
routes.use('/wishes', wishes);
routes.use('/userAddress', userAddress);
routes.use('/orders', orders);
routes.use('/orderDetails', orderDetails);

module.exports = routes;