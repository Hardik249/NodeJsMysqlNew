console.log('wishesRoutes');
const express = require('express');
const wishesRoutes = express();

const wishesControllers = require('./wishesControllers.js');

wishesRoutes.get('/wishes', wishesControllers.wishes);
// wishesRoutes.get('/viewwishes', wishesControllers.carts);
wishesRoutes.get('/viewwishes/:userId', wishesControllers.wishesByUser);
wishesRoutes.post('/addtowishes/:userId', wishesControllers.addtowishes);
// wishesRoutes.put('/updatequantity/:productId', wishesControllers.updatequantity);
wishesRoutes.delete('/removefromwishes/:id', wishesControllers.removefromwish);

module.exports = wishesRoutes;