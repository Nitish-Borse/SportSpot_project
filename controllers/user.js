const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Create user but don't log in yet
    const newUser = new User({ username, email, verified: false });
    const registeredUser = await User.register(newUser, password);

    // Generate a verification token
    const token = jwt.sign(
      { email: registeredUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Create a verification link
    const verifyUrl = `http://localhost:8080/verify/${token}`;

    // Send verification email
    await sendEmail(
      registeredUser.email,
      "Verify your SportSpot account",
      `Click here to verify your account: ${verifyUrl}`
    );

    req.flash("success", "Check your email to verify your account!");
    res.redirect("/login");
  } catch (e) {
    console.error(e);
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};


module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res, next) => {
try {
if (!req.user.verified) {
req.logout(() => {});
req.flash("error", "Please verify your email before logging in.");
return res.redirect("/login");
}
req.flash("success", "Welcome back to SportSpot!");
const redirectUrl = res.locals.redirectUrl || "/sportItems";
res.redirect(redirectUrl);
} catch (err) {
next(err);
}
};



module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You have logged out successfully!");
        res.redirect("/sportItems");
    });
}
