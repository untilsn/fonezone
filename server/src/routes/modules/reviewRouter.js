import express from "express";
import {
  createReviewController,
  getReviewsByProductOrBlogController,
  getReviewByIdController,
  updateReviewController,
  deleteReviewController,
  approveReviewController,
} from "../../controllers/reviewController.js";
import { validate } from "../../middlewares/validateMiddleware.js";
import {
  createReviewValidation,
  updateReviewValidation,
} from "../../validation/reviewValidation.js";
import { checkIdParam } from "../../middlewares/paramIdMiddleware.js";

const reviewRouter = express.Router();
const adminReviewRouter = express.Router();

reviewRouter
  .post("/", validate(createReviewValidation), createReviewController)
  .get("/:referenceModelId", getReviewsByProductOrBlogController)
  .get("/detail/:id", checkIdParam, getReviewByIdController)
  .put(
    "/:id",
    checkIdParam,
    validate(updateReviewValidation),
    updateReviewController
  )
  .delete("/:id", checkIdParam, deleteReviewController);

adminReviewRouter.patch("/approve/:id", checkIdParam, approveReviewController);

export { reviewRouter, adminReviewRouter };
