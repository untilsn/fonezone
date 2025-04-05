import express from "express";
import { blogUpload } from "../../config/multer.js";
import {
  createBlogController,
  deleteBlogController,
  getAllBlogsController,
  getBlogByIdController,
  publishStatusBlogController,
  updateBlogController,
} from "../../controllers/blogController.js";
import { checkIdParam } from "../../middlewares/paramIdMiddleware.js";
import { uploadMiddleware } from "../../middlewares/uploadMiddleware.js";
import { validateFormData } from "../../middlewares/validateMiddleware.js";
import {
  createBlogValidation,
  updateBlogValidation,
} from "../../validation/blogValidation.js";

const blogRouter = express.Router();
const adminBlogRouter = express.Router();

//USER ROUTER
blogRouter
  .get("/", getAllBlogsController)
  .get("/:id", checkIdParam, getBlogByIdController);

//ADMIN ROUTER
adminBlogRouter
  .post(
    "/",
    uploadMiddleware(blogUpload),
    validateFormData(createBlogValidation),
    createBlogController
  )
  .patch(
    "/:id",
    checkIdParam,
    uploadMiddleware(blogUpload),
    validateFormData(updateBlogValidation),
    updateBlogController
  )
  .patch("/:id/publish-status", checkIdParam, publishStatusBlogController)
  .delete("/:id", checkIdParam, deleteBlogController);

export { adminBlogRouter, blogRouter };
