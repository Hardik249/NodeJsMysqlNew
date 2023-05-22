console.log('wishsController');
const express = require('express');
const wishesControllers = express();
const { Op } = require("sequelize");
const con = require('../auth/conn.js');
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;

const Wish = require('../models/wishes.js');
const Cart = require('../models/carts.js');
const Product = require('../models/products.js');

exports.wishes = async (req, res) => {
    try {
        const wishes = await Wish.findAll({ include: Product });
        res.status(200).json({
            status : "success carts",
            message : "Test api carts",
            data: wishes
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail carts",
            message : "Test api carts",
            data: error
        });
    }
};


exports.addtowishes = async (req, res) => {
    try {
        const productAddedtowishes = await Wish.findOne({ include: Product,
            where: {
              userId: {
                [Op.eq]: req.params.userId
              },
              productId: {
                [Op.eq]: req.body.productId
              }
            }
        });
        // console.log(productAddedtowishes)
        if (productAddedtowishes == null) {
	        let addtowishes = await Wish.create({
	            productId: req.body.productId,
	            userId: req.params.userId,
	            createdAt: Date.now(),
	            updatedAt: Date.now(),
	        });
	        let addedtowishes = await addtowishes.save();
	        const productAddtowishes = await Wish.findOne({ include: Product,
	            where: {
	              userId: {
	                [Op.eq]: req.params.userId
	              },
	              productId: {
	                [Op.eq]: req.body.productId
	              }
	            }
	        });
	        res.status(200).json({
	            status : "success post addtocart try",
	            message : "Test post api addtocart try",
	            // data: productAddedtocart, item,
	            data: productAddtowishes
	        });
	    } else {
	    	res.status(200).json({
	            status : "success post addtocart try",
	            message : "product already added to wishes",
	            // data: productAddedtocart, item,
	            data: productAddedtowishes
	        });
	    }

        // let item = {
        //     'price':productAddedtocart.product.price,
        //     'quantity':productAddedtocart.quantity
        // }
        // console.log(item)
    } catch (error) {
        console.error(error)
        // console.error(error.errors)
        // console.error(error.errors.map((error)=>error.message))
        res.status(200).json({
            status : "fail post addtocart catch",
            message : "Test post api addtocart catch",
            data: error.errors.map((error)=>error.message),
            // data: error.errors.map((item)=>item.message),
        });
    }
};


exports.wishesByUser = async (req, res) => {
    try {
        const wishes = await Wish.findAll({ include: Product,
            where: {
              userId: {
                [Op.eq]: req.params.userId
              }
            }
        });
        // console.log(JSON.stringify(wishes, null, 2));


        res.status(200).json({
            status : "success wishes",
            message : "Test api wishes",
            data: wishes
        }); 
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail wishes",
            message : "Test api wishes",
            data: error
        });
    }
};


exports.removefromwish = async (req, res) => {
    try {
        let wishes = await Wish.destroy({
          where: {
            // authorId: 2
            // productId: req.params.productId
            id: req.params.id
          }
        });
        // console.log('r', wishes)
        res.status(200).json({
            status : "success destroy wishes try",
            message : "Test destroy api wishes try",
            data: wishes,
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail post wishes catch",
            message : "Test post api wishes catch",
            data: error,
            // data: error.errors.map((item)=>item.message),
        });
    }
};
