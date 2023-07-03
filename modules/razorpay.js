const Razorpay = require('razorpay');
const shortid = require('shortid');
const razorpay = new Razorpay({
  key_id: 'rzp_test_5aZFGfnkoKs3KA',
  key_secret: 'tu4NbZWXguqHLq37j5bBbWZ8',
});

const generateOrder = async (amount, currency) =>{
  const order = await razorpay.orders.create({
    amount,
    currency,
    receipt: `Receipt : ${shortid.generate()}`,
  });
  return {
    id: order.id,
    amount: order.amount,
    currency: order.currency,
    receipt: order.receipt,
  };
};
 

module.exports = {
  generateOrder, 
};