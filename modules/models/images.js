console.log('models/users');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;

const Image = sequelize.define('images', {
    // Model attributes are defined here
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING
      // allowNull defaults to true,
    },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,    
  }, {
    // Other model options go here
});

module.exports = Image;
