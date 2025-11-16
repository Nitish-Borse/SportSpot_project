const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const sportItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: { // 'equipment' or 'ground'
        type: String,
        enum: ['equipment', 'ground'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    sportCategory: { // cricket, football, badminton, etc.
        type: String,
        required: true
    },
    //availableDates: [String], // store as "YYYY-MM-DD"
    image: {
        url: {
            type: String,
            required: true,
        },
        filename: String,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

sportItemSchema.post("findOneAndDelete", async (sportItem) => {
    if (sportItem) {
        await Review.deleteMany({ _id: { $in: sportItem.reviews } });
    }
});

module.exports = mongoose.model("SportItem", sportItemSchema);
