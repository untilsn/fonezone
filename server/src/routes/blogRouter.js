import express from "express";
import {
  getAllBlogsController, getBlogByIdController, createBlogController,
  updateBlogController, deleteBlogController
} from "../controllers/blogController.js";
import { isAdmin } from "../middlewares/authMiddleware.js";
import validate from "../middlewares/validateMiddleware.js";
import { createBlogValidation, updateBlogValidation } from "../validation/blogValidation.js";

const blogRouter = express.Router();

/*USER BLOG ROUTES*/
blogRouter.get("/", getAllBlogsController);
blogRouter.get("/:id", getBlogByIdController);

/*ADMIN BLOG ROUTES*/
blogRouter.post("/", isAdmin, validate(createBlogValidation), createBlogController);
blogRouter.patch("/:id", isAdmin, validate(updateBlogValidation), updateBlogController);
blogRouter.delete("/:id", isAdmin, deleteBlogController);

export default blogRouter;
