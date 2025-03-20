import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { loginGoogle } from "../services/authService.js";
import config from "./env.js";


passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (profile, done) => {
      console.log("profile gg", profile)
      const result = await loginGoogle(profile);
      if (result.error) {
        return done(null, false, { message: result.error });
      }
      return done(null, result.user);
    }
  )
);

export default passport;
