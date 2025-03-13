import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }
});

export default mongoose.model('order', orderSchema);