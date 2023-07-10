const con = require('../auth/conn.js');
const Product = require('./products.js');
const User = require('./users.js');

const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;

const Reviews = sequelize.define('reviews', {
    // Model attributes are defined here
    productId: {
      type: DataTypes.INTEGER,
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
      // allowNull: false,
      // required: true,
      references: {
        model: User, // 'Actors' would also work
        key: 'id',
        as : 'users'
      },
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      // allowNull: false,
      // required: true,
    },
	created_by: {
		type: DataTypes.INTEGER,
		// allowNull: false,
		// required: true,
	},
	updated_by: {
		type: DataTypes.INTEGER,
		// allowNull: false,
		// required: true,
	},
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   required: true,
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   required: true,
    // },
  }, {
    // Other model options go here
});


// Reviews.sync({ alter: true });

Product.hasOne(Reviews);
Reviews.belongsTo(Product);

User.hasOne(Reviews);
Reviews.belongsTo(User);


module.exports = Reviews;
