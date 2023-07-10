const express = require('express');
const reviewsControllers = express();
const { Op } = require("sequelize");
const multer = require("multer");
const Reviews = require('../models/reviews.js');


exports.reviewsListAll = async (req, res) => {
    try {
        let reviews = await Reviews.findAll({});
        return res.status(200).json({
            status : "success Reviews",
            message : "Test api Reviews success",
            data: reviews
        });
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            status : "fail Reviews",
            message : "Test api Reviews fail",
            data: error
        });
    }
};

exports.addreview = async (req, res) => {
    try {
    	console.log(req.user);
    	// console.log(req.body);
    	// console.log(req.params);
    	//Setting storage engine
		const storageEngine = multer.diskStorage({
		  destination: "./images",
		  filename: (req, file, cb) => {
		    cb(null, `${Date.now()}--${file.originalname}`);
		  },
		});
		// console.log(storageEngine);
		//initializing multer
		const upload = multer({
		  storage: storageEngine,
		  // limits: { fileSize: 1000000 },
		});
		// console.log(upload);
		// console.log(req.file);
    	let reviewsDataObj = {
    		productId:req.params.productId,
    		userId:req.user.id,
    		review:req.body.review,
    		status:req.body.status,
    		// image: upload,
    		image:req.file ? req.file.originalname : '', 
    		created_by:req.user.id,
    		updated_by:req.user.id,
    		// createdAt:
    		// updatedAt:
    	}
    	let reviewsData = await Reviews.create(reviewsDataObj);
    	// console.log(reviewsData);
        // let reviews = await Reviews.findAll({});
        return res.status(200).json({
            status : "success Reviews",
            message : "Test api Reviews success",
            data: reviewsData
        });
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            status : "fail Reviews",
            message : "Test api Reviews fail",
            data: error
        });
    }
};

exports.reviewsList = async (req, res) => {
    try {
    	// const { page } = req.query;
    	console.log(req.query ? req.query.page : 1);
    	const page = req.query ? req.query.page : 1;
		const limit = 5;
		const skip = page ? (page - 1) * limit : 0;
    	// console.log(limit);
    	// console.log(skip);

    	// console.log(req.query);
        // let reviews = await Reviews.findAll({
        // 	limit: parseInt(req.query.limit, 5) || 5,
        // 	// limit: 5,
        // 	// offset: 5,
        // 	offset: parseInt(req.query.skip, 0) || 0,
        // });
        let reviews = await Reviews.findAll({
	      limit,
	      offset: skip,
	    });
        return res.status(200).json({
            status : "success Reviews",
            message : "Test api Reviews success",
            data: reviews
        });
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            status : "fail Reviews",
            message : "Test api Reviews fail",
            data: error
        });
    }
};

exports.reviewStatus = async (req, res) => {
    try {
    	const reviewStatusData = await Reviews.findByPk(req.params.id);
    	if (reviewStatusData) {
	    	// console.log(reviewStatusData);
	    	let reviewStatusDataObj = {
	    		// productId:req.params.productId,
	    		// userId:req.params.userId,
	    		// review:req.body.review,
	    		status:req.body.status,
	    		// // image: upload,
	    		// image:req.file ? req.file.originalname : '', 
	    		// created_by:req.params.userId,
	    		// updated_by:req.params.userId,
	    		// createdAt:
	    		// updatedAt:
	    	}
	    	let reviewStatusUpdate = await reviewStatusData.update(reviewStatusDataObj);
	    	let reviewsStatusUpdated = await reviewStatusUpdate.save();
	    	// console.log(reviewsStatusUpdated);
	        // let reviews = await Reviews.findAll({
		    //   limit,
		    //   offset: skip,
		    // });
	        return res.status(200).json({
	            status : "success Reviews",
	            message : "Test api Reviews success",
	            data: reviewsStatusUpdated
	        });
	    } else {
	    	return res.status(200).json({
	            status : "success Reviews",
	            message : "there is no Reviews",
	            // data: reviewsStatusUpdated
	        });
	    }
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            status : "fail Reviews",
            message : "Test api Reviews fail",
            data: error
        });
    }
};

