import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../services/blogService.js";

// Create a new blog
export const createBlogController = async (req, res, next) => {
  try {
    const newBlog = await createBlog({ ...req.body, author: req.user.id }, file);

    return res.status(201).json({
      success: true,
      data: newBlog,
      message: "Tạo blog thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Get all blogs
export const getAllBlogsController = async (req, res, next) => {
  try {
    const result = await getAllBlogs(req.query);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Lấy tất cả blog thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Get a single blog by ID
export const getBlogByIdController = async (req, res, next) => {
  try {
    const result = await getBlogById(req.params.id);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Lấy blog thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Update a blog
export const updateBlogController = async (req, res, next) => {
  try {
    const result = await updateBlog(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Cập nhật blog thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Delete a blog
export const deleteBlogController = async (req, res, next) => {
  try {
    const result = await deleteBlog(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Xóa blog thành công!",
    });
  } catch (error) {
    next(error);
  }
};
