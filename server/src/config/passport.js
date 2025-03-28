import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "./env.js";
import { googleAuth } from "../services/authService.js";
import CustomError from "../utils/customError.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"],
      session: false,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        if (!profile.emails.length) {
          return done(new CustomError(404, "Không tìm thấy email trong tài khoản Google"), false);
        }
        const user = await googleAuth(profile);
        return done(null, user)
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport;
