console.log('models/users');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;
const createdb = require('../auth/createdb.js');

// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });

// const User = sequelize.define('User', {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     }
//   }, {
//     // Other model options go here
//   });
  
// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  });
  
  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

const Data = sequelize.define("data", {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
    //   defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  });
  
//   (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
//   })();


// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();

module.exports = User;