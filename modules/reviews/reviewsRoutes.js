const express = require('express');
const reviewsRoutes = express();
const multer = require("multer");
// // Step 3: Initialize and configure Multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Set the destination folder for uploaded files
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });

// /tmp/my-uploads

//Setting storage engine
const storageEngine = multer.diskStorage({
  // destination: "uploads/",
  destination: "/home/ks/web/projects/Hardik/VueJs/red-brick/client/public/files/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});
const upload = multer({ storage: storageEngine });

const reviewsControllers = require('./reviewsController.js');
const reviewsValidation = require('../services/reviewsValidation.js');
const verifyToken = require('../services/verifyToken.js');

reviewsRoutes.get('/reviewsListAll', reviewsControllers.reviewsListAll);
reviewsRoutes.post('/addreview/:productId', [verifyToken.verifyToken], upload.any(), [reviewsValidation.reviewsValidation], reviewsControllers.addreview);
reviewsRoutes.get('/reviewsList/:productId', reviewsControllers.reviewsList);
reviewsRoutes.put('/updatereviewstatus/:id', [reviewsValidation.reviewStatusValidation], reviewsControllers.reviewStatus);

module.exports = reviewsRoutes;
