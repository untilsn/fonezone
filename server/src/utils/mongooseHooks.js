import latinize from "latinize";
import slugify from "slugify";

// Tạo slug từ name
export function generateSlug(next) {
  if (this.isModified("name")) {
    this.slug = slugify(latinize(this.name), { lower: true, strict: true });
  }
  next();
}

// Tính toán giá sau giảm giá
export function calculateDiscountPrice(next) {
  this.discountPrice = Math.round(
    this.discount > 0
      ? this.price - (this.price * this.discount) / 100
      : this.price
  );
  next();
}

// Kiểm tra thời gian Flash Sale
export function validateFlashSale(next) {
  if (this.flashSale?.flashSaleStart && this.flashSale?.flashSaleEnd) {
    if (this.flashSale.flashSaleStart >= this.flashSale.flashSaleEnd) {
      return next(new Error("Thời gian bắt đầu Flash Sale phải nhỏ hơn thời gian kết thúc"));
    }
  }
  next();
}
