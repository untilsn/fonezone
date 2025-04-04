import express from "express";
import {
  getAllBlogsController,
  getBlogByIdController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
} from "../../controllers/blogController.js";
import {
  validate,
  validateFormData,
} from "../../middlewares/validateMiddleware.js";
import {
  createBlogValidation,
  updateBlogValidation,
} from "../../validation/blogValidation.js";
import { checkIdParam } from "../../middlewares/paramIdMiddleware.js";
import { uploadMiddleware } from "../../middlewares/uploadMiddleware.js";
import { blogUpload } from "../../config/multer.js";

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
    validateFormData(updateBlogValidation),
    updateBlogController
  )
  .delete("/:id", checkIdParam, deleteBlogController);

export { blogRouter, adminBlogRouter };
