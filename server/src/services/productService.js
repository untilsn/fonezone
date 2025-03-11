import Product from "../models/Product.js";



export const getAllProducts = async ({ page = 1, limit = 10, sort, search }) => {
  const filter = {};
  if (search) {
    filter.name = { $regex: search, $options: "i" };
  }

  const sortOptions = {
    price_asc: { price: 1 },
    price_desc: { price: -1 },
    rating_desc: { rating: -1 },
    name_asc: { name: 1 },
    name_desc: { name: -1 },
    createdAt_desc: { createdAt: -1 },
    createdAt_asc: { createdAt: 1 },
    view_desc: { view: -1 },
  };

  const sortQuery = sortOptions[sort] || {};

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const products = await Product.find(filter)
    .sort(sortQuery)
    .skip(skip)
    .limit(parseInt(limit));

  const totalProducts = await Product.countDocuments(filter);

  return {
    totalProducts,
    totalPages: Math.ceil(totalProducts / limit),
    currentPage: parseInt(page),
    products,
  };
};


