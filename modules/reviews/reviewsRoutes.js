const express = require('express');
const reviewsRoutes = express();
const multer = require("multer");
const upload = multer();

const reviewsControllers = require('./reviewsController.js');
const reviewsValidation = require('../services/reviewsValidation.js');
const verifyToken = require('../services/verifyToken.js');

reviewsRoutes.get('/reviewsListAll', reviewsControllers.reviewsListAll);
reviewsRoutes.post('/addreview/:productId', [verifyToken.verifyToken], [reviewsValidation.reviewsValidation], upload.single("image"), reviewsControllers.addreview);
reviewsRoutes.get('/reviewsList', reviewsControllers.reviewsList);
reviewsRoutes.put('/updatereviewstatus/:id', [reviewsValidation.reviewStatusValidation], reviewsControllers.reviewStatus);

module.exports = reviewsRoutes;
