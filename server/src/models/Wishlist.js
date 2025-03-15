import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }
});
export default mongoose.model('Wishlist', wishlistSchema);