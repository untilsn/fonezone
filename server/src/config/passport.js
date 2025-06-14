import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "./env.js";
import { googleAuth } from "../services/authService.js";
import CustomError from "../utils/customError.js";

// passport.js
passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback", // URL cố định
      scope: ["profile", "email"],
      session: false,
      passReqToCallback: true, // Cho phép truy cập req trong callback
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log("Request params:", req.params);
      console.log("Request query:", req.query);

      try {
        if (!profile?.emails?.length) {
          return done(
            new CustomError(404, "Không tìm thấy email trong tài khoản Google"),
            false
          );
        }

        // Lấy clientType từ state parameter
        const clientType = req.query.state || "user";
        const user = await googleAuth(profile, clientType);
        console.log(user, "user p");
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport;
