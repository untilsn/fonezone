import mongoose from "mongoose";


const FlashsaleSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên đợt Flash Sale (VD: "Flash Sale 10.10")
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // Danh sách sản phẩm trong Flash Sale
  discountPercent: { type: Number, required: true, min: 1, max: 100 }, // Mức giảm giá (% hoặc số tiền)
  start: { type: Date, required: true }, // Thời gian bắt đầu
  end: { type: Date, required: true }, // Thời gian kết thúc
  status: { type: String, enum: ["upcoming", "active", "expired"], default: "upcoming" }, // Trạng thái Flash Sale
  createdAt: { type: Date, default: Date.now },
});

const Flashsale = mongoose.model("Flashsale", FlashsaleSchema)

export default Flashsale