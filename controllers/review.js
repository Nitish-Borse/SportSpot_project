const SportItem = require("../models/sport_Item.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    let { id } = req.params;
    let sportItem = await SportItem.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    sportItem.reviews.push(newReview);

    await newReview.save();
    await sportItem.save();
    req.flash("success", "New Review Created");
    res.redirect(`/sportItems/${id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await SportItem.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted");
    res.redirect(`/sportItems/${id}`);
};