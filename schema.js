const Joi = require("joi");

module.exports.sportItemSchema = Joi.object({
    sportItem: Joi.object({
        title: Joi.string().required(),
        type: Joi.string().required(),
        description: Joi.string().required(),
        pricePerHour: Joi.number().required().min(0),
        location: Joi.string().required(),
        sportCategory: Joi.string().required(),
        //availableDates: Joi.string().required(),
        image: Joi.object({
            url: Joi.string().uri().required()
        }).required(),
        //owner: Joi.string().required(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
});