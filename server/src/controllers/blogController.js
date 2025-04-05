import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  setPublishStatusBlog,
  updateBlog,
} from "../services/blogService.js";

// Create a new blog
export const createBlogController = async (req, res, next) => {
  try {
    const newBlog = await createBlog(
      { ...req.body, author: req.user.id },
      req.file
    );

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
    const { page = 1, limit = 5, search, category } = req.query;

    const allBlogs = await getAllBlogs({
      page: parseInt(page),
      limit: parseInt(limit),
      search,
      category,
    });

    return res.status(200).json({
      success: true,
      data: allBlogs,
      message: "Lấy tất cả blog thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Get a single blog by ID
export const getBlogByIdController = async (req, res, next) => {
  try {
    const result = await getBlogById(
      { ...req.body, author: req.user.id },
      req.file,
      req.params.id
    );

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
    const updatedBlog = await updateBlog(req.body, req.file, req.params.id);

    return res.status(200).json({
      success: true,
      data: updatedBlog,
      message: "Cập nhật blog thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Delete a blog
export const publishStatusBlogController = async (req, res, next) => {
  try {
    const publicStatus = await setPublishStatusBlog(req.params.id);

    return res.status(200).json({
      success: true,
      publicStatus,
      message: `Blog đã được ${publicStatus ? "công khai" : "ẩn"} thành công.`,
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
