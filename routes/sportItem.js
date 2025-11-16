const express = require("express");
const router = express.Router();
const SportItem = require("../models/sport_Item.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateSportItem } = require("../middleware.js");
const path = require("path");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const bookingController = require("../controllers/booking.js");
const sportItemContoller = require("../controllers/sportItem.js");

// Index and Create Route
router
    .route("/")
    .get(wrapAsync(sportItemContoller.index))
    .post(
        isLoggedIn,
        validateSportItem,
        upload.single("sportItem[image]"),
        wrapAsync(sportItemContoller.createSportItem)
    );

// New Form Route
router.get("/new", isLoggedIn, sportItemContoller.renderNewForm);

// Show Sport Grounds
router.get("/ground", wrapAsync(sportItemContoller.showSportGrounds));

// Show Sport Equipments
router.get("/equipment", wrapAsync(sportItemContoller.showSportEquipments));

// Search Sport Items By Sport Category
router.get("/search", wrapAsync(sportItemContoller.searchSportItem));

// Show, Update and Delete Routes
router
    .route("/:id")
    .get(wrapAsync(sportItemContoller.showSportItem))
    .put(
        isLoggedIn,
        isOwner,
        validateSportItem,
        upload.single("sportItem[image]"),
        wrapAsync(sportItemContoller.updateSportItem)
    )
    .delete(isLoggedIn, isOwner, wrapAsync(sportItemContoller.deleteSportItem));

// Edit Form Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(sportItemContoller.renderEditForm));

module.exports = router;
