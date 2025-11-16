const { required, ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    sportItem: {
        type: Schema.Types.ObjectId,
        ref: "SportItem",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    startAt: {
        type: Date,
        required: true,
    },
    endAt: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    note: {
        type: String,
    }
});

bookingSchema.index({ sportItem: 1, startAt: 1, endAt: 1 });

module.exports = mongoose.model("Booking",bookingSchema);