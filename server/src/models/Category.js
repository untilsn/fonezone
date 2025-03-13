import mongoose from 'mongoose';
import { generateSlug } from '../utils/mongooseHooks.js';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, lowercase: true },
}, { timestamps: true });

categorySchema.pre("save", generateSlug);


const Category = mongoose.models.Category || mongoose.model('category', categorySchema);

export default Category