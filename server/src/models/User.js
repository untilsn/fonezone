import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, trim: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  avatar: { type: String, trim: true },
  password: { type: String, trim: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  address: {
    type: [
      {
        phone: { type: String, required: true, trim: true },
        street: { type: String, required: true, trim: true },
        ward: { type: String, required: true, trim: true },
        district: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        postalCode: { type: String, trim: true },
        isDefault: { type: Boolean, default: false },
      },
    ],
    default: [],
  },
  googleId: { type: String, trim: true },
  isAccountVerify: { type: Boolean, default: false },
  loginMethod: { type: String, enum: ["email", "google"], required: true },
  isBanned: { type: Boolean, default: false },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User
