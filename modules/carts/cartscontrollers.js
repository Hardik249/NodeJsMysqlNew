console.log('cartscontroller');
const express = require('express');
const cartscontrollers = express();
const { Op } = require("sequelize");

// const users = require('../models/users.js');
const Cart = require('../models/carts.js');

// userscontrollers.get('/users', (req, res) => {
//     res.status(200).json({
//         "status" : "success users",
//         "message" : "Test api users"
//     });
// });

exports.carts = async (req, res) => {
    try {
        // let addtocart = await Cart.findAll({});
        let addtocart = await Cart.findAll({
          where: {
            // authorId: 2
          }
        });
        res.status(200).json({
            status : "success carts",
            message : "Test api carts",
            data: addtocart
        }); 
    } catch (error) {
        res.status(200).json({
            status : "fail carts",
            message : "Test api carts",
            data: error
        });
    }
};

exports.addtocart = async (req, res) => {
    try {
        let addtocart = await Cart.create({
            product_id: req.body.product_id,
            user_id: req.body.user_id,
            createdAt: Date.now(),
            updatedAt: null,
        });
        let addedtocart = await addtocart.save();
        res.status(200).json({
            status : "success post addtocart try",
            message : "Test post api addtocart try",
            data: addtocart,
        });
    } catch (error) {
        res.status(200).json({
            status : "fail post addtocart catch",
            message : "Test post api addtocart catch",
            data: error.errors,
            // data: error.errors.map((item)=>item.message),
        });
    }
};

exports.removefromcart = async (req, res) => {
    try {
        console.log('req', req.params.product_id)
        // console.log('req', req.query.array)
        // console.log('req', JSON.parse(req.query.array))
        // let addtocart = await Cart.destroy({
        //   where: {
        //     // authorId: 2
        //     product_id: {
        //         // [Op.eq]: req.params.id
        //         // [Op.eq]: req.query.array
        //         [Op.in]: req.query.array
        //         // [Op.eq]: JSON.parse(req.query.array)
        //         // [Op.in]: JSON.parse(req.query.array)
        //         // [Op.eq]: req.query.array.split(',')
        //         // [Op.in]: JSON.parse(req.query.array.split(','))
        //         // [req.params.id]
        //     }
        //   }
        // });
        let addtocart = await Cart.destroy({
          where: {
            // authorId: 2
            product_id: req.params.product_id
          }
        });
        console.log('r', addtocart)
        // let addtocart = await Cart.findOne({}, {
        //   where: {
        //     // user_id: req.params.user_id
        //     product_id: req.params.product_id
        //   }
        // });
        // console.log('f', addtocart)
        // let addedtocart = await addtocart.destroy({
        //   where: {
        //     // user_id: req.params.user_id
        //     product_id: req.params.product_id
        //   }
        // });
        // console.log('d', addtocart)
        res.status(200).json({
            status : "success destroy addtocart try",
            message : "Test destroy api addtocart try",
            data: addtocart,
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail post addtocart catch",
            message : "Test post api addtocart catch",
            data: error,
            // data: error.errors.map((item)=>item.message),
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