const SportItem = require("../models/sport_Item.js");
const ExpressError = require("../utils/ExpresError.js");
const { cloudinary } = require("../cloudConfig.js");

// Show all sport items (Index Page)
module.exports.index = async (req, res) => {
    const allSportItems = await SportItem.find({});
    res.render("sportItems/index.ejs", { allSportItems });
};

// Render form to create a new Sport Item
module.exports.renderNewForm = (req, res) => {
    res.render("sportItems/new.ejs");
};

// Create a new Sport Item
module.exports.createSportItem = async (req, res) => {
    const newSportItem = new SportItem(req.body.sportItem);
    newSportItem.owner = req.user._id;
    if (req.file) {
        newSportItem.image = { url: req.file.path, filename: req.file.filename };
    }
    await newSportItem.save();
    req.flash("success", "New Sport Item added successfully!");
    res.redirect(`/sportItems/${newSportItem._id}`);
};

// Show a particular Sport Item
module.exports.showSportItem = async (req, res) => {
    const { id } = req.params;
    const sportItem = await SportItem.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" },
        })
        .populate("owner");
    if (!sportItem) {
        req.flash("error", "Sport Item not found!");
        return res.redirect("/sportItems");
    }
    res.render("sportItems/show.ejs", { sportItem, originalImageUrl: sportItem.image.url });
};

// Render Edit Form for a Sport Item
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const sportItem = await SportItem.findById(id);
    if (!sportItem) {
        req.flash("error", "Sport Item not found!");
        return res.redirect("/sportItems");
    }
    res.render("sportItems/edit.ejs", { sportItem, originalImageUrl: sportItem.image.url });
};

// Update a Sport Item
module.exports.updateSportItem = async (req, res) => {
    const { id } = req.params;
    const updatedSportItem = await SportItem.findByIdAndUpdate(id, { ...req.body.sportItem });
    if (req.file) {
        // Delete old image from Cloudinary
        if (updatedSportItem.image && updatedSportItem.image.filename) {
            await cloudinary.uploader.destroy(updatedSportItem.image.filename);
        }
        updatedSportItem.image = { url: req.file.path, filename: req.file.filename };
        await updatedSportItem.save();
    }
    req.flash("success", "Sport Item updated successfully!");
    res.redirect(`/sportItems/${updatedSportItem._id}`);
};

// Delete a Sport Item
module.exports.deleteSportItem = async (req, res) => {
    const { id } = req.params;
    const deletedItem = await SportItem.findByIdAndDelete(id);
    if (deletedItem && deletedItem.image && deletedItem.image.filename) {
        await cloudinary.uploader.destroy(deletedItem.image.filename);
    }
    req.flash("success", "Sport Item deleted successfully!");
    res.redirect("/sportItems");
};

// Show only sports grounds
module.exports.showSportGrounds = async (req, res) => {
    const sportItems = await SportItem.find({ type: "ground" });
    res.render("sportItems/index.ejs", { allSportItems: sportItems });
};

// Show only equipment
module.exports.showSportEquipments = async (req, res) => {
    const sportItems = await SportItem.find({ type: "equipment" });
    res.render("sportItems/index.ejs", { allSportItems: sportItems });
};

// Search sport items by category
module.exports.searchSportItem = async (req, res, next) => {
    const { category } = req.query;

    if (!category || category.trim() === "") {
        return next(new ExpressError("Please enter something to search.", 400));
    }

    const regex = new RegExp(category, "i");

    const sportItems = await SportItem.find({
        $or: [
            { title: regex },
            { sportCategory: regex },
            { description: regex },
            { location: regex }
        ]
    });

    if (sportItems.length === 0) {
        return next(new ExpressError(`No sport items found for "${category}".`, 404));
    }

    res.render("sportItems/index.ejs", { allSportItems: sportItems });
};
