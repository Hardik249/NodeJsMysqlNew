console.log('models/address');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;
const Product = require('./products.js');
const User = require('./users.js');

const userAddress = sequelize.define('userAddress', {
  // Model attributes are defined here
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  zip: {
    type: DataTypes.INTEGER,
    allowNull: false,
    required: true,
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
  // quantity: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,    
  }, {
    // Other model options go here
    // sequelize,
    // paranoid: true,

    // If you want to give a custom name to the deletedAt column
    // deletedAt: 'destroyTime'
});


User.hasOne(userAddress);
userAddress.belongsTo(User);

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

module.exports = userAddress;
