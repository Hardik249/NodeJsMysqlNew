console.log('modules/routes');
const express = require('express');
const routes = express();

const users = require('./users/usersroutes.js');

routes.use('/users', users);

module.exports = routes;