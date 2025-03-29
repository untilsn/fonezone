import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    referenceModel: { 
      type: mongoose.Schema.Types.ObjectId, 
      required: true,
      refPath: 'onModel'
    },
    onModel: { 
      type: String, 
      required: true,
      enum: ['Product', 'Blog']
    },
    rating: { 
      type: Number, 
      required: true, 
      min: 1, 
      max: 5 
    },
    comment: { 
      type: String, 
      required: true, 
      trim: true 
    },
    isApproved: { 
      type: Boolean, 
      default: false 
    }
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;