import mongoose from "mongoose";


const FlashsaleSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], 
  discountPercent: { type: Number, required: true, min: 1, max: 100 }, 
  start: { type: Date, required: true }, 
  end: { type: Date, required: true }, 
  status: { type: String, enum: ["upcoming", "active", "expired"], default: "upcoming" }, 
  createdAt: { type: Date, default: Date.now },
});

const Flashsale = mongoose.model("Flashsale", FlashsaleSchema)

export default Flashsale