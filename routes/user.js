const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userContoller = require("../controllers/user.js");
const jwt = require("jsonwebtoken");

//Render Signup Form Route And Signup Route
router
  .route("/signup")
  .get(userContoller.renderSignupForm)
  .post(wrapAsync(userContoller.signup));

//Render Login Form Route And Login Route
router
  .route("/login")
  .get(userContoller.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userContoller.login)
  );

router.get("/logout", userContoller.logout);

// start auth flow
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", failureFlash: true }),
  (req, res) => {
    // Successful authentication
    req.flash("success", "Logged in with Google!");
    const redirectUrl = res.locals.redirectUrl || "/sportItems";
    res.redirect(redirectUrl);
  }
);

router.get("/verify/:token", async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      req.flash("error", "Invalid verification link.");
      return res.redirect("/login");
    }

    user.verified = true;
    await user.save();

    req.flash("success", "Email verified successfully! You can now log in.");
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    req.flash("error", "Verification link expired or invalid.");
    res.redirect("/signup");
  }
});

module.exports = router;

