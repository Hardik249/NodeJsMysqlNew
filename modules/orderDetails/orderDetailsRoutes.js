console.log('orderDetailsRoutes');
const express = require('express');
const orderDetailsRoutes = express();

const orderDetailsControllers = require('./orderDetailsControllers.js');
const orderDetailsValidation = require('../services/orderDetailsValidation.js');

orderDetailsRoutes.get('/orderDetailsList', orderDetailsControllers.orderDetails);
orderDetailsRoutes.get('/orderDetailsList/:userId', orderDetailsControllers.orderDetailsByUser);
orderDetailsRoutes.post('/addorderDetails/:userId', [orderDetailsValidation.orderDetailsValidation], orderDetailsControllers.addorderDetails);

module.exports = orderDetailsRoutes;
