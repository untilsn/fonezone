import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, lowercase: true },
}, { timestamps: true });

categorySchema.pre("save", function (next) {
  if (this.isModified("name")) {
    const normalizedName = latinize(this.name);
    this.slug = slugify(normalizedName, { lower: true, strict: true });
  }
  next();
});

const Category = mongoose.model('category', categorySchema);

export default Category