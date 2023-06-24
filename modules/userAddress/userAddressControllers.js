console.log('userAddressController');
const express = require('express');
const userAddressController = express();
const { Op } = require("sequelize");
const con = require('../auth/conn.js');
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;

const Wish = require('../models/wishes.js');
const Address = require('../models/address.js');
const User = require('../models/users.js');
const Cart = require('../models/carts.js');
const Product = require('../models/products.js');
const Order = require('../models/orders.js');

exports.userAddress = async (req, res) => {
    try {
        const userAddress = await Address.findAll({ include: User });
        if (userAddress.length != 0) {
            res.status(200).json({
                status : "success userAddress address",
                message : "Test api address",
                data: userAddress
            });
        } else {
            res.status(200).json({
                status : "success userAddress address",
                message : "no address found for entered user",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail userAddress address",
            message : "Test api address",
            data: error
        });
    }
};



exports.userAddressByUser = async (req, res) => {
    try {
        const userAddress = await Address.findAll({ include: User,
            where: {
              userId: {
                [Op.eq]: req.params.userId
              }
            }
        });
        // console.log(JSON.stringify(userAddress, null, 2));
        console.log(userAddress.length);
        if (userAddress.length != 0) {
            res.status(200).json({
                status : "success userAddress address",
                message : "Test api address",
                data: userAddress
            });
        } else {
            res.status(200).json({
                status : "success userAddress address",
                message : "no address found for entered user",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail userAddress address",
            message : "Test api address by user",
            data: error
        });
    }
};


exports.addressByUser = async (req, res) => {
    try {
        const userAddress = await Address.findOne({
            // include: User,
            include: Order,
            where: {
              id: {
                [Op.eq]: req.params.id
              }
            }
        });
        // console.log(JSON.stringify(userAddress, null, 2));
        // console.log(userAddress.length);
        if (userAddress != null) {
            res.status(200).json({
                status : "success userAddress address",
                message : "Test api address",
                data: userAddress
            });
        } else {
            res.status(200).json({
                status : "success userAddress address",
                message : "no address found",
                // message : "no address found for entered id of order",
                // data: userAddress
            });
        }
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail userAddress address",
            message : "Test api address by user",
            data: error
        });
    }
};



exports.addtouseraddress = async (req, res) => {
    try {
        let userAddressData = {
            address: req.body.address,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            zip: req.body.zip,
            userId: req.params.userId,
        }
        let userAddresses = await Address.findOne({
            where: userAddressData
        });
        if (userAddresses == null) {
            const userAddress = await Address.create(userAddressData);
            let userAddressList = await Address.findAll({
                where:{
                    userId: req.params.userId
                }
            })
            res.status(200).json({
                status : "success user address added",
                message : "address added successfully",
                data: userAddress, userAddressList
            });
        } else {
            res.status(200).json({
                status : "success user address added",
                message : "address already added",
                data: userAddresses
            });
        }
    } catch (error) {
        console.error(error)
        // console.error(error.errors)
        // console.error(error.errors.map((error)=>error.message))
        res.status(200).json({
            status : "fail post addtouseraddress catch",
            message : "Test post api addtouseraddress catch",
            // data: error.errors.map((error)=>error.message),
            // data: error.errors.map((item)=>item.message),
        });
    }
};


