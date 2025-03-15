
export function calculateDiscountPrice(price, discount) {
  if (!price || price <= 0) return 0;
  if (!discount || discount <= 0) return price;
  return Math.round(price - (price * discount) / 100);
}


export function isValidFlashSale(flashSaleStart, flashSaleEnd) {
  if (!flashSaleStart || !flashSaleEnd) return false;
  return new Date(flashSaleStart) < new Date(flashSaleEnd);
}
