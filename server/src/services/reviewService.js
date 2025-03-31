import mongoose from "mongoose";
import Review from "../models/Review.js";
import CustomError from "../utils/customError.js";

export const createReview = async (reviewData) => {
  const review = await Review.create(reviewData);
  return review;
};

export const getReviewsByProductOrBlog = async (referenceModelId) => {
  if (!mongoose.Types.ObjectId.isValid(referenceModelId)) {
    throw new CustomError(400, "ID không hợp lệ.");
  }
  const reviews = await Review.find({ referenceModelId, isDeleted: false });
  return reviews;
};

export const getReviewById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "ID không hợp lệ.");
  }
  const review = await Review.findById(id);
  if (!review) throw new AppError(404, "Không tìm thấy review");
  return review;
};

export const updateReview = async (id, updateData) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "ID không hợp lệ.");
  }
  const updatedReview = await Review.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  if (!updatedReview) throw new CustomError(404, "Không tìm thấy review");
  return updatedReview;
};

export const deleteReview = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "ID không hợp lệ.");
  }
  const review = await Review.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  if (!review) throw new CustomError(404, "Không tìm thấy review");
  return review;
};

export const approveReview = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "ID không hợp lệ.");
  }
  const approvedReview = await Review.findByIdAndUpdate(id, { isApproved: true }, { new: true });
  if (!approvedReview) throw new CustomError(404, "Không tìm thấy review");
  return approvedReview;
};
