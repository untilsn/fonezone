import express from "express";
import {
  getAllBlogsController, getBlogByIdController, createBlogController,
  updateBlogController, deleteBlogController
} from "../../controllers/blogController.js";
import validate from "../../middlewares/validateMiddleware.js";
import { createBlogValidation, updateBlogValidation } from "../../validation/blogValidation.js";
import { checkIdParam } from "../../middlewares/paramIdMiddleware.js";

const blogRouter = express.Router();
const adminBlogRouter = express.Router();

//USER ROUTER
blogRouter
  .get("/", getAllBlogsController)
  .get("/:id", checkIdParam, getBlogByIdController)

//ADMIN ROUTER
adminBlogRouter
  .post("/", validate(createBlogValidation), createBlogController)
  .patch("/:id", checkIdParam, validate(updateBlogValidation), updateBlogController)
  .delete("/:id", checkIdParam, deleteBlogController)

export { blogRouter, adminBlogRouter };
 