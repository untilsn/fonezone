import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    discount: { type: Number, default: 0 }, // Mã giảm giá (nếu có)
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cod", "credit_card", "paypal", "bank_transfer"],
      required: true,
    },
    paymentResult: {
      transactionId: String,
      status: String,
      updateTime: Date,
      email: String,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "canceled"],
      default: "pending",
    },
    shippingMethod: {
      type: String,
      enum: ["standard", "express", "same_day", "pickup"],
      default: "standard",
    },
    trackingNumber: { type: String }, // Mã vận đơn
    deliveryStatus: {
      type: String,
      enum: ["pending", "shipped", "delivered", "returned"],
      default: "pending",
    },
    deliveredAt: { type: Date }, // Ngày giao hàng thành công
    shippingAddress: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    orderNote: { type: String }, // Ghi chú khách hàng
    isDeleted: { type: Boolean, default: false }, // Tránh xóa hẳn đơn hàng
  },
  {
    timestamps: true,
  }
);

// ** Middleware: Cập nhật totalPrice tự động trước khi lưu **
orderSchema.pre("save", function (next) {
  this.totalPrice = this.products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  next();
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
