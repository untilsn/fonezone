import Blog from "../models/Blog.js";
import { generalSlug } from "../utils/slugHelper.js";

// Create a new blog
export const createBlog = async (data) => {
  const { title, content, thumbnail, categories, author, isPublished } = data;

  const existingBlog = await Blog.findOne({ title });
  if (existingBlog) throw new CustomError(400, "Bài viết đã tồn tại.");

  const slug = generalSlug(title);

  const blog = new Blog({
    title,
    slug,
    content,
    thumbnail,
    categories,
    author,
    isPublished,
  });

  return await blog.save();
};

// Get all blogs with pagination and filtering
export const getAllBlogs = async (query) => {
  const { page = 1, limit = 10, category, author, search } = query;

  const filter = {};

  if (category) filter.categories = category;
  if (author) filter.author = author;
  if (search) filter.title = { $regex: search, $options: "i" };

  const blogs = await Blog.find(filter)
    .populate("author", "name")
    .populate("categories", "name")
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
export const updateBlog = async (id, data) => {
  const blog = await Blog.findById(id);

  if (!blog) throw new CustomError(404, "Blog không tồn tại.");

  if (data.title) data.slug = slugify(data.title, { lower: true, strict: true });

  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  const blog = await Blog.findById(id);

  if (!blog) throw new CustomError(404, "Blog không tồn tại.");

  return await Blog.findByIdAndDelete(id);
};
