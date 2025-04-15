import Blog from "../models/Blog.js";
import Category from "../models/Category.js";
import { updateImage, uploadImage } from "../utils/cloudinaryHelper.js";
import CustomError from "../utils/customError.js";
import { generalSlug } from "../utils/slugHelper.js";

// Create a new blog
export const createBlog = async (data, file) => {
  const { title, content, categories, author, isPublished } = data;

  let thumbnailUrl = "";
  if (file) thumbnailUrl = await uploadImage(file.path, "fonezone/blogs");

  const existingBlog = await Blog.findOne({ title });
  if (existingBlog) throw new CustomError(400, "Bài viết đã tồn tại.");

  const slug = generalSlug(title);

  const blog = new Blog({
    title,
    slug,
    content,
    thumbnail: thumbnailUrl,
    categories,
    author,
    isPublished,
  });

  return await blog.save();
};

// Get all blogs with pagination and filtering
export const getAllBlogs = async (page = 1, limit = 5, search, category) => {
  let filter = {};

  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  if (category) {
    const categories = await Category.find({
      slug: { $in: category.split(",") },
    }).select("_id");
    const categoryIds = categories.map((cat) => cat._id);

    filter.categories = { $in: categoryIds };
  }

  const blogs = await Blog.find(filter)
    .populate("author", "name")
    .populate("category", "name")
    .skip((page - 1) * limit)
    .limit(parseInt(limit))
    .sort({ createdAt: -1 });

  const total = await Blog.countDocuments(filter);

  return { blogs, total };
};

// Get a single blog by ID
export const getBlogById = async (id) => {
  const blog = await Blog.findById(id)
    .populate("author", "name")
    .populate("categories", "name")
    .populate("comments.user", "name");

  if (!blog) throw new CustomError(404, "Không tìm thấy blog.");

  return blog;
};

// Update a blog by ID
export const updateBlog = async (data, file, blogId) => {
  const blog = await Blog.findById(blogId);
  if (!blog) throw new CustomError(404, "Blog không tồn tại.");

  if (data.title)
    data.slug = generalSlug(data.title, { lower: true, strict: true });

  if (file)
    data.thumbnail = await updateImage(
      blog.thumbnail.public_id,
      file.path,
      "fonezone/blogs"
    );

  return await Blog.findByIdAndUpdate(blogId, data, { new: true });
};

// Delete a blog by ID
export const setPublishStatusBlog = async (blogId) => {
  const blog = await Blog.findById(blogId);

  if (!blog) throw new CustomError(404, "Blog không tồn tại.");

  blog.isPublished = !blog.isPublished;

  await blog.save();

  return blog.isPublished;
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  const blog = await Blog.findById(id);

  if (!blog) throw new CustomError(404, "Blog không tồn tại.");

  return await Blog.findByIdAndDelete(id);
};
