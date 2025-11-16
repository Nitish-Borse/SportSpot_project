if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpresError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/user.js");

const sportItemRouter = require("./routes/sportItem.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const passwordRouter = require("./routes/password.js");
const bookingRoutes = require("./routes/booking.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));


const MONGO_URL = "mongodb://127.0.0.1:27017/SportItemsRental";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
    secret: "mysuperscretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.get("/", (req, res) => {
    res.send("Hi i am nitish root");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // profile contains emails and displayName
      const email = profile.emails && profile.emails[0] && profile.emails[0].value;
      let user = await User.findOne({ googleId: profile.id });

      if (!user && email) {
        // Try linking if a user exists with same email (optional)
        user = await User.findOne({ email: email });
        if (user) {
          // Link Google to existing account
          user.googleId = profile.id;
          user.verified = true; // because Google verified email
          await user.save();
          return done(null, user);
        }
      }

      if (!user) {
        // create new user
        user = new User({
          username: profile.displayName || email.split('@')[0],
          email: email,
          googleId: profile.id,
          verified: true
        });
        await user.save();
      }
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
}));

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.use("/sportItems", sportItemRouter);
app.use("/sportItems/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/", passwordRouter);
app.use("/", bookingRoutes);

app.get("/privacy",(req,res) => {
    res.send("Privacy Part is Comming Soon");
});

app.get("/terms",(req,res) => {
    res.send("Terms Part is Comming Soon");
});

//Error Handling Middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("sportItems/error.ejs", { message });
});


//App Listing
app.listen(8080, () => {
    console.log("app is listening on port : 8080");
});