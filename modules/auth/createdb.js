console.log('createdb');
// var Sequelize = require('sequelize'),
//     pg = require('pg');
const mysql = require('mysql2');
    
const con = require('../auth/conn.js');
const sequelize = con.sequelize;
const conn = con.con;
const config = require('../../config.js');
// let pg = require('pg');
console.log('config.db.username', config.db.user);
console.log('config.db.password', config.db.password);
// console.log();
const createdb = mysql.createConnection({
    user     : config.db.user,
    password : config.db.password
}).query(`CREATE DATABASE IF NOT EXISTS ${config.db.database};`, function (error, results, fields) {
    if (error) throw error;
    console.log(`Database ${config.db.database} Created.!`);
});
// .then((connection) => {
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.database};`).then(() => {
//         // Safe to use sequelize now
//     });
//     console.log(`Database ${config.db.database}`);
// });

module.exports = createdb;