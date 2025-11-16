const SportItem = require("./models/sport_Item.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpresError.js");
const { sportItemSchema, reviewSchema } = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl; // <--- Correct Passport key
        req.flash("error", "You must be logged in first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.redirectUrl = req.session.returnTo;
    }
    next();
};

// Middleware to validate SportItem data using Joi
module.exports.validateSportItem = (req, res, next) => {
    const { error } = sportItemSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

// Middleware to check ownership of a SportItem
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const sportItem = await SportItem.findById(id);
    if (!sportItem.owner._id.equals(req.user._id)) {
        req.flash("error", "You don’t have permission to do that!");
        return res.redirect(`/sportItems/${id}`);
    }
    next();
};

// Middleware to validate Review data using Joi
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

// Middleware to check review ownership
module.exports.isReviewAutor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author._id.equals(req.user._id)) {
        req.flash("error", "You don’t have permission to delete this review!");
        return res.redirect(`/sportItems/${id}`);
    }
    next();
};
