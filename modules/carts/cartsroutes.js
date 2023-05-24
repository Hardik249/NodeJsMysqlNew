console.log('cartsroutes');
const express = require('express');
const cartsroutes = express();

const cartscontrollers = require('./cartscontrollers.js');

// usersroutes.get('/users', userscontrollers);
cartsroutes.get('/viewcarts', cartscontrollers.carts);
cartsroutes.get('/viewcarts/:userId', cartscontrollers.cartsByUser);
cartsroutes.post('/addtocart/:userId', cartscontrollers.addtocart);
cartsroutes.put('/updatequantity/:productId', cartscontrollers.updatequantity);
cartsroutes.delete('/removefromcart/:id', cartscontrollers.removefromcart);

module.exports = cartsroutes;