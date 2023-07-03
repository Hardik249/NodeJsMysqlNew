const express = require('express');
const app = express();
const PORT = 3001;
const routes = require('./routes.js');
const Razorpay = require('razorpay');

// const whitelistedDomains = process.env.WHITELIST_DOMAINS.split(",");
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelistedDomains.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }


var instance = new Razorpay({
  key_id: 'rzp_test_5aZFGfnkoKs3KA',
  key_secret: 'tu4NbZWXguqHLq37j5bBbWZ8',
});

// instance.payments.fetch(paymentId)


routes.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})