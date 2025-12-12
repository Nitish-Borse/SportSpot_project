# 🏆 SportSpot – Sports Ground & Equipment Renting and Simple Booking Platform

SportSpot is a full-stack web application built using **Node.js, Express, MongoDB, Passport.js, Google OAuth, Cloudinary, and EJS templates**.  
Users can browse sports items, create accounts, upload items, write reviews, and make **simple bookings (without payment)** to simulate a real renting experience.  
Owners can add items, manage listings, and view bookings.

---

## 🚀 Features

### ✅ User Authentication
- Local sign-up & login using **passport-local**
- Login with **Google OAuth 2.0**
- Email verification using **JWT**
- Password reset via email

---

### 🏋️ Sport Items (Grounds & Equipment)
- Add new sport items (ground or equipment)
- Upload images using **Cloudinary**
- Edit and delete item listings
- Category filter: Cricket, Football, Tennis, Gym, etc.
- Search by sport category
- Clean UI with reusable EJS layouts

---

### 🎯 Booking System
- Users can book available time slots  
- Prevents **overlapping bookings**
- Owners can view all bookings made for their items
- Email confirmation is sent after booking
- *Booking is simple — no payment integration*

---

### ⭐ Reviews
- Users can leave ratings and comments
- Owners cannot review their own items
- Users can delete their reviews

---

## 🛡️ Security
- Sensitive credentials stored in `.env`
- Route protections using middleware (`isLoggedIn`, `isOwner`)
- Server-side validation with Joi
- Sanitization and structured MVC code

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | Passport.js, Google OAuth 2.0 |
| **Views** | EJS, ejs-mate |
| **File Uploads** | Multer + Cloudinary |
| **Email** | Nodemailer |
| **Validation** | Joi Schema |
| **Architecture** | MVC |
| **Deployment Ready** | Yes |





