console.log('userAddressRoutes');
const express = require('express');
const userAddressRoutes = express();

const userAddressControllers = require('./userAddressControllers.js');
const userAddressValidation = require('../services/userAddressValidation.js');

userAddressRoutes.get('/userAddressList', userAddressControllers.userAddress);
userAddressRoutes.get('/userAddressList/:userId', userAddressControllers.userAddressByUser);
userAddressRoutes.post('/addtouseraddress/:userId', [userAddressValidation.userAddressValidation], userAddressControllers.addtouseraddress);
userAddressRoutes.get('/address/:id', userAddressControllers.addressByUser);

module.exports = userAddressRoutes;
