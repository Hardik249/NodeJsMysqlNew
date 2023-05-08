console.log('models/users');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;

const Product = sequelize.define('products', {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true,
    },
      price: DataTypes.INTEGER,
      discountPercentage: DataTypes.FLOAT,
      rating: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      brand: DataTypes.STRING,
      category: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      images0: DataTypes.STRING,
      images1: DataTypes.STRING,
      images2: DataTypes.STRING,
      images3: DataTypes.STRING,
      images4: DataTypes.STRING,
      images5: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,    
  }, {
    // Other model options go here
});

module.exports = Product;

