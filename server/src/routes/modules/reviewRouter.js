import express from "express";
import {
  createReviewController,
  getReviewsByProductOrBlogController,
  getReviewByIdController,
  updateReviewController,
  deleteReviewController,
  approveReviewController,
} from "../../controllers/reviewController.js";
import validate from "../../middlewares/validateMiddleware.js";
import { createReviewValidation, updateReviewValidation } from "../../validation/reviewValidation.js";

const reviewRouter = express.Router();
const adminReviewRouter = express.Router();

reviewRouter
  .post("/", validate(createReviewValidation), createReviewController)
  .get("/:referenceModelId", getReviewsByProductOrBlogController)
  .get("/detail/:id", getReviewByIdController)
  .put("/:id", validate(updateReviewValidation), updateReviewController)
  .delete("/:id", deleteReviewController);


adminReviewRouter.patch("/approve/:id", approveReviewController);

export { reviewRouter, adminReviewRouter };
