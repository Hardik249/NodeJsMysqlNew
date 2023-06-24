console.log('orderDetailsController');
const express = require('express');
const ordersController = express();
const { Op } = require("sequelize");
const con = require('../auth/conn.js');
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;

const Wish = require('../models/wishes.js');
const userAddress = require('../models/address.js');
const Order = require('../models/orders.js');
const User = require('../models/users.js');
const Cart = require('../models/carts.js');
const Product = require('../models/products.js');
const orderDetails = require('../models/orderDetails.js');


exports.orderDetails = async (req, res) => {
    try {
        const orderDetailsList = await orderDetails.findAll({ include: Product });
        res.status(200).json({
            status : "success orderDetails",
            message : "Test api orderDetails list",
            data: orderDetailsList
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail orderDetails",
            message : "Test api orderDetails list",
            data: error
        });
    }
};


exports.orderDetailsByUser = async (req, res) => {
    try {
        const orderDetailsList = await orderDetails.findAll({ 
            // include: [Product, Order, User],
            // include:[{
            //     model: User, Order, Product,
            //     include: [userAddress]
            // }],
            include: [{
              model: User,
              include: [userAddress]
            },
            {
              model: Order,
            },
            {
              model: Product,
            }],
            where: {
              userId: {
                [Op.eq]: req.params.userId
              }
            }
        });
        // console.log(JSON.stringify(orderDetailsList, null, 2));


        if (orderDetailsList.length != 0) {
            res.status(200).json({
                status : "success orderDetails",
                message : "Test api orderDetails list by user",
                data: orderDetailsList
            }); 
        } else {
            res.status(200).json({
                status : "success orderDetails",
                message : "no orderDetails found for entered Product",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail orderDetails",
            message : "Test api orderDetails list by user",
            data: error
        });
    }
};



exports.orderDetailsByOrder = async (req, res) => {
    try {
        const orderDetailsList = await orderDetails.findAll({
            // include: [Product, Order, User],
            // include:[{
            //     model: User, Order, Product,
            //     include: [userAddress]
            // }],
            include: [
                {
                  model: User,
                  // include: [userAddress],
                },
                {
                  model: Order,
                },
                {
                  model: Product,
                }
            ],
            where: {
              orderId: {
                [Op.eq]: req.params.orderId
              }
            },
            // group: ['orderDetails.id'], // Group by the primary key of orderDetails
        });
        // console.log(JSON.stringify(orderDetailsList, null, 2));
        // console.log(orderDetailsList.length);


        if (orderDetailsList != null) {
            res.status(200).json({
                status : "success orderDetails",
                message : "Test api orderDetail by orderId",
                data: orderDetailsList
            });
        } else {
            res.status(200).json({
                status : "success orderDetails",
                message : "no orderDetails found for entered Order",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail orderDetails",
            message : "Test api orderDetails list by user",
            data: error
        });
    }
};


exports.addorderDetails = async (req, res) => {
    try {
        // console.log(req.body);
        // let orderDetail = await orderDetails.findOne({
        //     where: {
        //         // productId: req.params.productId,
        //         productId: req.body.productId,
        //         quantity: req.body.quantity,
        //     }
        // });
        // console.log(req.params);
        // console.log(req.body);
        // let totalPriceArr = [];
        let value = [];
        let totalPrice;
        let totalAmount = 0;
        if (req.body.quantity.length == req.body.price.length) {
            for (var i = 0; i < req.body.quantity.length; i++) {
                totalPrice = req.body.quantity[i] * req.body.price[i];
                // totalPriceArr.push(req.body.quantity[i] * req.body.price[i]);
                totalAmount += totalPrice;
                value.push({
                    quantity: req.body.quantity[i],
                    price: req.body.price[i],
                    totalPrice: totalPrice,
                    // totalAmount: req.body.totalAmount,
                    // totalAmount: totalAmount,
                    totalAmount: req.body.totalAmount ? req.body.totalAmount : totalAmount  ,
                    productId: req.body.productId[i],
                    orderId: req.body.orderId,
                    userId: req.params.userId,
                });
            }
        }
        const orderDetailsData = await orderDetails.bulkCreate(value);
        return res.status(200).json({
            status : "success orderDetails addorderDetails",
            message : "Test api orderDetails added",
            data: orderDetailsData
        });
        // console.log(totalPriceArr);
        // let totalPrice = req.body.quantity * req.body.price;
        // console.log('v', value);
        // console.log('o', orderDetail);
        let orderDetail = await orderDetails.findOne({
            where: value
        });
        // if (orderDetail == null) {
        // } else {
            // return res.status(200).json({
            //     status : "success orderDetails addorderDetails",
            //     message : "orderDetails already added",
            //     data: orderDetail
            // });
        // }
    } catch (error) {
        console.error(error)
        // console.error(error.errors)
        // console.error(error.errors.map((error)=>error.message))
        return res.status(200).json({
            status : "fail post addorderDetails catch",
            message : "Test post api addorderDetails catch",
            // data: error.errors.map((error)=>error.message),
            // data: error.errors.map((item)=>item.message),
        });
    }
};


