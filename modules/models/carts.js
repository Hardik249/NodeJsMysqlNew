console.log('models/users');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;

const Cart = sequelize.define('add_to_cart', {
    // Model attributes are defined here
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true,
      allowNull: false,
      required: true,
    },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,    
  }, {
    // Other model options go here
    sequelize,
    paranoid: true,

    // If you want to give a custom name to the deletedAt column
    deletedAt: 'destroyTime'
});

module.exports = Cart;
