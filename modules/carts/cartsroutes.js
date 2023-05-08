console.log('cartsroutes');
const express = require('express');
const cartsroutes = express();

const cartscontrollers = require('./cartscontrollers.js');

// usersroutes.get('/users', userscontrollers);
cartsroutes.get('/viewcarts', cartscontrollers.carts);
cartsroutes.post('/addtocart', cartscontrollers.addtocart);
cartsroutes.delete('/removefromcart/:user_id', cartscontrollers.removefromcart);

module.exports = cartsroutes;