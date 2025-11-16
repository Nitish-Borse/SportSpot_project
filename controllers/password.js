const jwt = require("jsonwebtoken");
const User = require("../models/user");
const sendEmail = require("../utils/sendEmail");

// Step 1: Render forgot password page
module.exports.renderForgotForm = (req, res) => {
  res.render("users/forgotPassword.ejs");
};

// Step 2: Handle form submission - send reset link
module.exports.sendResetLink = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    req.flash("error", "No account found with that email.");
    return res.redirect("/forgot-password");
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "10m" });
  const resetUrl = `http://localhost:8080/reset-password/${token}`;

  await sendEmail(
    user.email,
    "SportSpot Password Reset",
    `Click the link to reset your password: ${resetUrl}\n\nThis link will expire in 10 minutes.`
  );

  req.flash("success", "Password reset link sent to your email.");
  res.redirect("/login");
};

// Step 3: Render reset password form
module.exports.renderResetForm = (req, res) => {
  const { token } = req.params;
  res.render("users/resetPassword.ejs", { token });
};

// Step 4: Handle password reset submission
module.exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      req.flash("error", "Invalid or expired token.");
      return res.redirect("/forgot-password");
    }

    await user.setPassword(password); // Passport-Local-Mongoose helper
    await user.save();

    req.flash("success", "Password reset successful! You can now log in.");
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    req.flash("error", "Link expired or invalid. Try again.");
    res.redirect("/forgot-password");
  }
};
