const { any } = require("joi");
const Booking = require("../models/booking");
const SportItem = require("../models/sport_Item");
const sendEmail = require("../utils/sendEmail");

module.exports.renderNewBookingForm = async (req, res) => {
  const { id } = req.params;  // sport item id
  const sportItem = await SportItem.findById(id);

  // 🧠 Fetch all existing bookings for this sport item that are not cancelled
  const existingBookings = await Booking.find({
    sportItem: sportItem._id,
    status: { $in: ["pending", "confirmed"] },
  });

  res.render("bookings/new", { sportItem, existingBookings });
};

async function hasOverlap(sportItemId, startAt, endAt) {
  // Overlap condition: existing.start < new.end && existing.end > new.start
  const overlapping = await Booking.findOne({
    sportItem: sportItemId,
    status: { $in: ["pending","confirmed"] },
    $expr: {
      $and: [
        { $lt: ["$startAt", endAt] },
        { $gt: ["$endAt", startAt] }
      ]
    }
  });
  return !!overlapping;
};

module.exports.createBooking = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const userEmail = req.user.email;
    const userName = req.user.username;
    const sportItemId = req.params.id;
    const { startAt: startAtStr, endAt: endAtStr, note } = req.body;

    const startAt = new Date(startAtStr);
    const endAt = new Date(endAtStr);

    if (isNaN(startAt) || isNaN(endAt) || startAt >= endAt) {
      req.flash("error", "Invalid start or end time.");
      return res.redirect(`/sportItems/${sportItemId}/book`);
    }

    // ✅ Prevent overlapping bookings
    const overlapping = await Booking.findOne({
      sportItem: sportItemId,
      status: { $in: ["pending", "confirmed"] },
      startAt: { $lt: endAt },
      endAt: { $gt: startAt },
    });

    if (overlapping) {
      req.flash(
        "error",
        "This time slot is already booked. Please choose another."
      );
      return res.redirect(`/sportItems/${sportItemId}/book`);
    }

    if (startAt < new Date()) {
      req.flash("error", "You can’t book in the past.");
      return res.redirect(`/sportItems/${sportItemId}/book`);
    }


    // ✅ Save new booking
    const booking = new Booking({
      sportItem: sportItemId,
      user: userId,
      startAt,
      endAt,
      note,
      status: "confirmed",
    });

    await booking.save();

    // ✅ Send confirmation email
    const sportItem = await SportItem.findById(sportItemId);

    const subject = `Booking Confirmed — SportSpot`;
    const text = `Hello ${userName},

Your booking for "${sportItem.title}" has been confirmed.

Start: ${startAt}
End:   ${endAt}

Booking ID: ${booking._id}

Thank you,
SportSpot Team`;

    const html = `
      <div style="font-family:sans-serif; line-height:1.6;">
        <h2 style="color:#fe424d;">Booking Confirmed 🎉</h2>
        <p>Hello <b>${userName}</b>,</p>
        <p>Your booking for <b>${sportItem.title}</b> has been confirmed.</p>
        <p>
          <strong>Start:</strong> ${startAt}<br/>
          <strong>End:</strong> ${endAt}<br/>
          <strong>Booking ID:</strong> ${booking._id}
        </p>
        <p>Thank you for using <b>SportSpot</b>!</p>
      </div>
    `;

    await sendEmail(userEmail, subject, text, html);

    req.flash("success", "Booking confirmed! Confirmation email sent.");
    res.redirect(`/sportItems/${sportItemId}`);
  } catch (err) {
    console.error("Booking error:", err);
    req.flash("error", "Something went wrong while creating booking.");
    res.redirect("/sportItems");
  }
};


// Show booking details
module.exports.showBooking = async (req, res, next) => {
  const booking = await Booking.findById(req.params.bookingId).populate("sportItem").populate("user");
  if (!booking) {
    req.flash("error", "Booking not found");
    return res.redirect("/sportItems");
  }
  res.render("bookings/show.ejs", { booking });
};

module.exports.userBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("sportItem")
    .sort({ startAt: -1 });
  res.render("bookings/userBookings.ejs", { bookings });
};


// owner view: GET /owner/bookings
module.exports.ownerBookings = async (req, res) => {
  // find sportItems owned by this user
  const items = await SportItem.find({ owner: req.user._id }).select("_id");
  const itemIds = items.map(i => i._id);
  const bookings = await Booking.find({ sportItem: { $in: itemIds } })
    .populate("user")
    .populate("sportItem")
    .sort({ startAt: 1 });
  res.render("bookings/ownerIndex.ejs", { bookings });
};

// Function to cancel a booking (NEW ADDITION)
module.exports.cancelBooking = async (req, res) => {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId).populate("user");

    if (!booking) {
        req.flash("error", "Booking not found.");
        return res.redirect("/my/bookings");
    }

    // 1. Check if the logged-in user is the owner of the booking
    if (!booking.user._id.equals(req.user._id)) {
        req.flash("error", "You do not have permission to cancel this booking.");
        return res.redirect("/my/bookings");
    }

    // 2. Check if the booking start time is in the future
    if (booking.startAt < new Date()) {
        req.flash("error", "Cannot cancel. This booking has already started.");
        return res.redirect("/my/bookings");
    }

    // 3. Check if it's already cancelled
    if (booking.status === "cancelled") {
        req.flash("error", "This booking is already cancelled.");
        return res.redirect("/my/bookings");
    }

    // 4. Update status to 'cancelled'
    booking.status = "cancelled";
    await booking.save();

    req.flash("success", "Booking successfully cancelled.");
    res.redirect("/my/bookings");
};


