const express = require("express");
const router = express.Router();
const passwordController = require("../controllers/password");
const wrapAsync = require("../utils/wrapAsync");

router
  .route("/forgot-password")
  .get(passwordController.renderForgotForm)
  .post(wrapAsync(passwordController.sendResetLink));

router
  .route("/reset-password/:token")
  .get(passwordController.renderResetForm)
  .post(wrapAsync(passwordController.resetPassword));

module.exports = router;
