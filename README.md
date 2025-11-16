# 🏆 SportSpot – Sports Ground & Equipment Renting and Simple Booking Platform

SportSpot is a full-stack MERN-style web application built using **Node.js, Express, MongoDB, Passport.js, Google OAuth, Cloudinary, and EJS templates**.  
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

---

## 📁 Project Structure
├── controllers/ # Route logic
├── init/ # Data seeding files
├── models/ # Mongoose models
├── public/ # CSS, JS, static assets
├── routes/ # Express route handlers
├── utils/ # Helper functions
├── views/ # EJS templates
│
├── app.js # Main server file
├── cloudConfig.js # Cloudinary setup
├── middleware.js # Custom middleware
├── schema.js # Joi validation schema
├── package.json
├── package-lock.json
├── .gitignore
├── .copilotignore
└── README.md

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:
JWT_SECRET=your_jwt_secret
GOOGLECLIENTID=your_google_id
GOOGLECLIENTSECRET=your_google_secret
GOOGLECALLBACKURL=http://localhost:8080/auth/google/callback

CLOUDINARY_CLOUD=your_cloud
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password

---

### ⚠️ Important: Never Upload Your `.env` File

Your `.gitignore` **must include**:
.env
.env.*

---

## ▶️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/sportspot.git
cd sportspot
```

### 2. Install dependencies 
```npm install```

### 3. Setup your .env file
Use the values listed in the Environment Variables section.

### 4. (Optional) Seed sample data
```node init/index.js```

###5. Start the server
```node app.js```
Server will run at:
👉 http://localhost:8080
