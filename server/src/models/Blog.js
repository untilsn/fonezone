import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, lowercase: true },
    content: { type: String, required: true },
    thumbnail: { type: String, default: "" },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    views: { type: Number, default: 0 },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);


const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
