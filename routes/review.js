const express = require("express");
const router = express.Router({ mergeParams: true });
const SportItem = require("../models/sport_Item.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn,validateReview, isReviewAutor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");

//Post Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAutor, wrapAsync(reviewController.deleteReview));

module.exports = router;
