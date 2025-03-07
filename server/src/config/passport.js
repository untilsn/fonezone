import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../models/User.js";
import config from "./env.js";
dotenv.config()

passport.use(new GoogleStrategy({
  clientID: config.GOOGLE_CLIENT_ID,
  clientSecret: config.GOOGLE_CLIENT_SECRET,
  callbackURL: config.GOOGLE_REDIRECT_URI,
  scope: ["profile", "email"]
},
  async (accessToken, refreshToken, profile, callback) => {
    try {
      let user = await User.findOne({ email: profile.emails[0].value })

      if (user) {
        if (user.loginMethod === "google") {
          return callback(null, user)
        } else {
          return callback(null, false)
        }
      }

      user = await User.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        googleId: profile.id,
        isAccountVerify: true,
        loginMethod: "google"
      })

      return callback(null, user)
    } catch (error) {
      return callback(error, null)
    }
  }
))


passport.serializeUser((user, done) => {
  done(null, user._id);
});


passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    return callback(null, user)
  } catch (error) {
    return callback(error, null)
  }
})