console.log('ordersController');
const express = require('express');
const ordersController = express();
const { Op, literal } = require("sequelize");
const con = require('../auth/conn.js');
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;

const Wish = require('../models/wishes.js');
const userAddress = require('../models/address.js');
const Order = require('../models/orders.js');
const User = require('../models/users.js');
const Cart = require('../models/carts.js');
const Product = require('../models/products.js');

exports.orders = async (req, res) => {
    try {
        const orders = await Order.findAll({ include: User });
        res.status(200).json({
            status : "success orders",
            message : "Test api orders list",
            data: orders
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail orders",
            message : "Test api orders list",
            data: error
        });
    }
};



exports.ordersByUser = async (req, res) => {
    try {
        const orders = await Order.findAll({
            // include: User,
            // include: [{
            //   model: User,
            //   include: [userAddress]
            // }],
            // {
            //   model: Order,
            // },
            // {
            //   model: Product,
            // }],
            where: {
                userId: {
                    [Op.eq]: req.params.userId
                },
            },
            // order: 'id'
            // order: 'id desc'
            // order: 'order.id DESC'
            // order: 'id DESC'
            // order: [
            //   ['id', 'DESC'],
            // ],
            order: [['id', 'DESC']],
        });
        // console.log(JSON.stringify(orders, null, 2));
        // console.log(orders.length)


        if (orders.length != 0) {
            res.status(200).json({
                status : "success orders",
                message : "Test api orders list by user",
                data: orders
            });
        } else {
            res.status(200).json({
                status : "success orders",
                message : "no orders found for entered user",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail orders",
            message : "Test api address list by user",
            data: error
        });
    }
};


exports.ordersById = async (req, res) => {
    try {
        const orders = await Order.findOne({
            // include: User,
            // include: [{
            //   model: User,
            //   include: [userAddress]
            // }],
            // {
            //   model: Order,
            // },
            // {
            //   model: Product,
            // }],
            where: {
              id: {
                [Op.eq]: req.params.id
              }
            }
        });
        // console.log(JSON.stringify(orders, null, 2));


        if (orders.length != 0) {
            res.status(200).json({
                status : "success orders",
                message : "Test api orders list by user",
                data: orders
            }); 
        } else {
            res.status(200).json({
                status : "success orders",
                message : "no orders found for entered user",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail orders",
            message : "Test api address list by user",
            data: error
        });
    }
};


exports.ordersByMonth = async (req, res) => {
    try {

        console.log(req.params);
        const orders = await Order.findAll({
            // include: User,
            // include: [{
            //   model: User,
            //   include: [userAddress]
            // }],
            // {
            //   model: Order,
            // },
            // {
            //   model: Product,
            // }],
            where: {
              // id: {
              //   [Op.eq]: req.params.id
              // }
              userId: {
                [Op.eq]: req.params.userId
              }
            }
        });

        // Build the query
        const filteredData = await Order.findAll({
            where: literal(`MONTH(createdAt) = ${req.params.month}`),
            order: [['id', 'DESC']],
        });


        // return res.status(200).json({
        //     status : "success orders",
        //     message : "Test api orders list by user",
        //     data: filteredData
        // });

        if (filteredData.length != 0) {
            return res.status(200).json({
                status : "success orders",
                message : "Test api orders list by user",
                data: filteredData
            });
        } else {
            return res.status(200).json({
                status : "success orders",
                message : "no orders found for selected month.",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail orders",
            message : "Test api address list by user",
            data: error
        });
    }
};



exports.addorder = async (req, res) => {
    try {
        const order = await Order.create({
            addressId: req.body.addressId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contact: req.body.contact,
            userId: req.params.userId,
            total: req.body.total,
        });
        res.status(200).json({
            status : "success orders addorder",
            message : "Test api orders added",
            data: order
        });
    } catch (error) {
        console.error(error)
        // console.error(error.errors)
        // console.error(error.errors.map((error)=>error.message))
        res.status(200).json({
            status : "fail post addorder catch",
            message : "Test post api addorder catch",
            // data: error.errors.map((error)=>error.message),
            // data: error.errors.map((item)=>item.message),
        });
    }
};


