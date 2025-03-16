import Wishlist from "../models/Wishlist.js";


export const getWishlist = async (userId) => {
  const wishlists = await Wishlist.findOne(userId).populate("productId");
  return wishlists
};


export const addWishlist = async (userId, productId) => {
  const wishlist = await Wishlist.findOne({ userId })

  if (!wishlist) {
    wishlist = await Wishlist.create({ userId, productId: [productId] })
  } else {
    if (!wishlist.productId.includes(productId)) {
      wishlist.productId.push(productId)
      await Wishlist.save()
    }
  }

  return wishlist
};


export const removeWishlist = async (userId, productId) => {
  const wishlist = await Wishlist.findOne({ userId })

  if (!wishlist) return null

  wishlist.productId = wishlist.productId.filter((id) => id.toString() !== productId)
  await wishlist.save()

  return wishlist
};


export const clearWishlist = async (userId) => {
  return await Wishlist.findOneAndUpdate(
    { userId },
    { $set: { productId: [] } }, 
    { new: true }
  );
};
