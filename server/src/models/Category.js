import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, trim: true, unique: true, lowercase: true, },
  type: {
    type: String,
    enum: ["product", "blog"],
    required: true
  }
}, { timestamps: true });


const Category = mongoose.models.Category || mongoose.model('category', categorySchema);

export default Category