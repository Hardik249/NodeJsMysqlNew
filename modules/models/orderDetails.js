console.log('models/ordersdetails');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;
const Product = require('./products.js');
const User = require('./users.js');
const userAddress = require('./address.js');
const Order = require('./orders.js');

const orderDetails = sequelize.define('orderDetails', {
  // Model attributes are defined here
  quantity: DataTypes.INTEGER,
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    required: true,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true,
    allowNull: false,
    required: true,
  },
  totalAmount: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true,
    allowNull: false,
    required: true,
  },
  productId : {
    type: DataTypes.INTEGER,
    // allowNull defaults to true,
    allowNull: false,
    required: true,
    references: {
      model: Product, // 'Actors' would also work
      key: 'id',
      as : 'products'
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true,
    allowNull: false,
    required: true,
    references: {
      model: User, // 'Actors' would also work
      key: 'id',
      as : 'users'
    },
  },
  orderId: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true,
    allowNull: false,
    required: true,
    references: {
      model: Order, // 'Actors' would also work
      key: 'id',
      as : 'orders'
    },
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,    
}, {
  // Other model options go here
  // sequelize,
  // paranoid: true,

  // If you want to give a custom name to the deletedAt column
  // deletedAt: 'destroyTime'
});


// Product.hasOne(Cart);
// Cart.belongsTo(Product);

// User.hasOne(Order);
// Order.belongsTo(User);

Product.hasOne(orderDetails);
orderDetails.belongsTo(Product);

User.hasOne(orderDetails);
orderDetails.belongsTo(User);

// orderDetails.hasOne(Order);
// Order.belongsTo(orderDetails);

Order.hasOne(orderDetails);
orderDetails.belongsTo(Order);


// orderDetails.hasOne(Product);
// Product.belongsTo(orderDetails);




// Order.hasOne(orderDetails);
// orderDetails.belongsTo(Order);

// Product.hasOne(Order);
// Order.belongsTo(Product);

// User.hasOne(Order);
// Order.belongsTo(User);

// Product.hasOne(Order);
// Order.belongsTo(Product);

// User.hasOne(Order);
// Order.belongsTo(User);

// Product.hasOne(Wish);
// Wish.belongsTo(Product);

// User.hasOne(Wish);
// Wish.belongsTo(User);

// Wish.sync();






// sequelize.sync({ force: true  });
// Wish.sync({ force: true });
// Wish.sync();

// Wish.sync().then(
//   () => console.log("Sync complete")
// );


// This will run .sync() only if database name ends with '_test'
// sequelize.sync({ force: true, match: /_test$/ });
// sequelize.sync({ alter: true });
// Wish.sync({ alter: true });

// orderDetails.sync({ alter: true });

module.exports = orderDetails;
