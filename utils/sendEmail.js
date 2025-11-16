const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text, html = null) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"SportSpot Team" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text, // fallback for plain text
    html, // HTML version if provided
  });
};

module.exports = sendEmail;
