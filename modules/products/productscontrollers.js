console.log('productscontroller');
const express = require('express');
const productscontrollers = express();

// const users = require('../models/users.js');
const Product = require('../models/products.js');

// userscontrollers.get('/users', (req, res) => {
//     res.status(200).json({
//         "status" : "success users",
//         "message" : "Test api users"
//     });
// });

exports.products = async (req, res) => {
    try {
        // let products = await Product.findAll({});
        let products = await Product.findOne({
          where: {
            // authorId: 2
            product_id: req.params.product_id
          }
        });
        // console.log(products)
        res.status(200).json({
            status : "success products",
            message : "Test api products",
            data: products
        }); 
    } catch (error) {
        res.status(200).json({
            status : "fail products",
            message : "Test api products",
            data: error
        });
    }
};

// exports.signup = async (req, res) => {
//     try {
//         let user = await User.create({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: hashPass,
//             contact: req.body.contact,
//             // createdAt: Date.now();
//         });
//         res.status(200).json({
//             status : "success users",
//             message : "Test api users signup try",
//             data: user
//         });   
//     } catch (error) {
//         console.error(error);
//     }
// };

// exports.login = (req, res) => {
//     try {
//         res.status(200).json({
//             "status" : "success users",
//             "message" : "Test api users login try"
//         });   
//     } catch (error) {
        
//     }
// };


// module.exports = userscontrollers;