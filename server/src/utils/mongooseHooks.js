import latinize from "latinize";
import slugify from "slugify";

// Tạo slug từ name khi thêm mới hoặc cập nhật
export async function generateSlug(next) {
  if (this.isModified("name")) {
    this.slug = slugify(latinize(this.name), { lower: true, strict: true });
  }
  next();
}

// Xử lý slug khi update (findOneAndUpdate)
export async function generateSlugOnUpdate(next) {
  const update = this.getUpdate();
  if (update.name) {
    update.slug = slugify(latinize(update.name), { lower: true, strict: true });
  }
  next();
}

// Tính toán giá sau giảm giá khi lưu mới
export async function calculateDiscountPrice(next) {
  if (this.isModified("price") || this.isModified("discount")) {
    this.discountPrice = Math.round(
      this.discount > 0 ? this.price - (this.price * this.discount) / 100 : this.price
    );
  }
  next();
}

// Tính toán giá sau giảm giá khi update
export async function calculateDiscountPriceOnUpdate(next) {
  const update = this.getUpdate();
  if (update.price !== undefined || update.discount !== undefined) {
    const doc = await this.model.findOne(this.getQuery());
    const newPrice = update.price !== undefined ? update.price : doc.price;
    const newDiscount = update.discount !== undefined ? update.discount : doc.discount;

    update.discountPrice = Math.round(
      newDiscount > 0 ? newPrice - (newPrice * newDiscount) / 100 : newPrice
    );
  }
  next();
}

// Kiểm tra thời gian Flash Sale khi thêm mới
export async function validateFlashSale(next) {
  if (this.flashSale?.flashSaleStart && this.flashSale?.flashSaleEnd) {
    if (this.flashSale.flashSaleStart >= this.flashSale.flashSaleEnd) {
      return next(new Error("Thời gian bắt đầu Flash Sale phải nhỏ hơn thời gian kết thúc"));
    }
  }
  next();
}

// Kiểm tra thời gian Flash Sale khi update
export async function validateFlashSaleOnUpdate(next) {
  const update = this.getUpdate();
  if (update.flashSale?.flashSaleStart && update.flashSale?.flashSaleEnd) {
    if (update.flashSale.flashSaleStart >= update.flashSale.flashSaleEnd) {
      return next(new Error("Thời gian bắt đầu Flash Sale phải nhỏ hơn thời gian kết thúc"));
    }
  }
  next();
}
