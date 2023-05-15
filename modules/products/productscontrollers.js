console.log('productscontroller');
const express = require('express');
const productscontrollers = express();
const { Op } = require("sequelize");
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

        // let products = await Product.findOne({
        //   where: {
        //     // authorId: 2
        //     id: req.params.id
        //   }
        // });
        // console.log('reqp', req.params.array)
        console.log('req', req.query.array)
        console.log('reqj', JSON.parse(req.query.array))
        let products = await Product.findAll({
          where: {
            // authorId: 2
            // id: req.params.id
            id: {
                // [Op.eq]: req.params.id
                // [Op.eq]: req.query.array
                // [Op.in]: req.query.array
                // [Op.eq]: JSON.parse(req.query.array)

                [Op.in]: JSON.parse(req.query.array)
                
                // [Op.eq]: req.query.array.split(',')
                // [Op.in]: JSON.parse(req.query.array.split(','))
                // [req.params.id]
            }
          }
        });
        // SELECT * FROM post WHERE authorId = 2;

        // console.log(products)
        res.status(200).json({
            status : "success products",
            message : "Test api products",
            data: products
        }); 
    } catch (error) {
        console.error(error);
        res.status(200).json({
            status : "fail products",
            message : "Test api products",
            data: error
        });
    }
};


exports.product = async (req, res) => {
    try {
        // let products = await Product.findAll({});

        let product = await Product.findOne({
          where: {
            // authorId: 2
            id: req.params.id
          }
        });
        // console.log('reqp', req.params.array)

        // console.log('req', req.query.array)
        // console.log('reqj', JSON.parse(req.query.array))

        // let products = await Product.findAll({
        //   where: {
        //     // authorId: 2
        //     // id: req.params.id
        //     id: {
        //         // [Op.eq]: req.params.id
        //         // [Op.eq]: req.query.array
        //         // [Op.in]: req.query.array
        //         // [Op.eq]: JSON.parse(req.query.array)

        //         [Op.in]: JSON.parse(req.query.array)

        //         // [Op.eq]: req.query.array.split(',')
        //         // [Op.in]: JSON.parse(req.query.array.split(','))
        //         // [req.params.id]
        //     }
        //   }
        // });
        // SELECT * FROM post WHERE authorId = 2;

        // console.log(product)
        res.status(200).json({
            status : "success products",
            message : "Test api products",
            data: product
        });
    } catch (error) {
        console.error(error);
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