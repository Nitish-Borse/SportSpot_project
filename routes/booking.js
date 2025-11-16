const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking");
const { isLoggedIn } = require("../middleware");
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/sportItems/:id/book", isLoggedIn, bookingController.renderNewBookingForm);

router.post("/sportItems/:id/book", isLoggedIn, bookingController.createBooking);

// In routes/booking.js, replace line 850 with:

router.get("/bookings/:bookingld", isLoggedIn, bookingController.showBooking);

// Route for a user to view their own bookings
router.get("/my/bookings", isLoggedIn, wrapAsync(bookingController.userBookings));

// Route to cancel a specific booking
router.put("/:bookingId/cancel", isLoggedIn, wrapAsync(bookingController.cancelBooking));

router.get("/owner/bookings", isLoggedIn, wrapAsync(bookingController.ownerBookings));

module.exports = router;
