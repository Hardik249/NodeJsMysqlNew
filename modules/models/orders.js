console.log('models/orders');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;
const Product = require('./products.js');
const User = require('./users.js');
const userAddress = require('./address.js');
// const orderDetails = require('./orderDetails.js');

const Order = sequelize.define('orders', {
    // Model attributes are defined here
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: userAddress, // 'Actors' would also work
        key: 'id',
        as : 'userAddress'
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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    total: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,    
  }, {
    // Other model options go here
    // sequelize,
    // paranoid: true,

    // If you want to give a custom name to the deletedAt column
    // deletedAt: 'destroyTime'
});



User.hasOne(Order);
Order.belongsTo(User);

// Product.hasOne(Order);
// Order.belongsTo(Product);

// Order.hasMany(orderDetails);
// orderDetails.belongsTo(Order);








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

// Order.sync({ alter: true });

module.exports = Order;
