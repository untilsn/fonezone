import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "./env.js";
import User from "../models/User.js";
import generateTokens from "../utils/jwtGeneral.js";

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
        if (!profile || !profile.emails || !profile.emails.length) {
          return done(new Error("Không tìm thấy email trong tài khoản Google"), false);
        }

        const email = profile.emails[0].value;
        let user = await User.findOne({ email });

        if (user) {
          if (user.loginMethod !== "google") {
            return done(null, false, { message: "Email này đã được đăng ký bằng phương thức khác." });
          }
        } else {
          user = new User({
            email,
            name: profile.displayName,
            avatar: profile.photos?.[0]?.value,
            googleId: profile.id,
            isAccountVerify: true,
            loginMethod: "google",
          });
          await user.save();
        }
        const { access_token, refresh_token } = generateTokens(user);

        return done(null, { access_token, refresh_token });
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport;
