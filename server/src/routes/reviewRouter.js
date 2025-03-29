import express from "express";
import { 
  createReviewController,
  getReviewsByProductOrBlogController,
  getReviewByIdController,
  updateReviewController,
  deleteReviewController,
  approveReviewController,
} from "../controllers/reviewController.js";
import { isAdmin, isUser } from "../middlewares/authMiddleware.js";
import validate from "../middlewares/validateMiddleware.js";
import { createReviewValidation, updateReviewValidation } from "../validation/reviewValidation.js";

const reviewRouter = express.Router();

/*================= USER ROUTES =================*/
// Tạo review mới cho Product hoặc Blog
reviewRouter.post(
  "/",
  isUser,
  validate(createReviewValidation),
  createReviewController
);
// Lấy tất cả reviews của một sản phẩm hoặc blog (User)
reviewRouter.get(
  "/:referenceModelId",
  getReviewsByProductOrBlogController
);
// Lấy review cụ thể của user (có thể dùng để chỉnh sửa hoặc xóa)
reviewRouter.get(
  "/detail/:id",
  isUser,
  getReviewByIdController
);
// Cập nhật review của user (User chỉ có thể chỉnh sửa review của chính mình)
reviewRouter.put(
  "/:id",
  isUser,
  validate(updateReviewValidation),
  updateReviewController
);
// Xóa review của user (User chỉ có thể xóa review của chính mình)
reviewRouter.delete(
  "/:id",
  isUser,
  deleteReviewController
);


/*================= ADMIN ROUTES =================*/

// Phê duyệt review (Admin)
reviewRouter.patch(
  "/approve/:id",
  isAdmin,
  approveReviewController
);

export default reviewRouter;
