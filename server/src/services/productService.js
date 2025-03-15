import errorHandle from "../middlewares/errorMiddleware.js";
import Brand from "../models/Brand.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import { calculateDiscountPrice } from "../utils/productHelper.js";
import { generalSlug } from "../utils/slugHelper.js";






export const getAllProduct = async ({ page, limit, sort, search, brand, category, ram, storage, color, minPrice, maxPrice }) => {
  let query = {};

  if (search) query.name = { $regex: search, $options: "i" };

  if (brand) {
    const brands = await Brand.find({ name: { $in: brand.split(",").map(b => b.toLowerCase()) } }).select("_id");
    query.brand = { $in: brands.map(b => b._id) };
  }

  if (category) {
    const categories = await Category.find({ slug: { $in: category.split(",") } }).select("_id");
    query.category = { $in: categories.map(c => c._id) };
  }

  if (ram) query.ram = { $in: ram.split(",") };
  if (storage) query.storage = { $in: storage.split(",") };
  if (color) query.colors = { $in: color.split(",") };

  if (minPrice || maxPrice) {
    query.price = {
      ...(minPrice && { $gte: Number(minPrice) }),
      ...(maxPrice && { $lte: Number(maxPrice) })
    };
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
  const sortOption = sortOptions[sort] || {};

  const skip = (Number(page) - 1) * Number(limit);

  const [products, total] = await Promise.all([
    Product.find(query).sort(sortOption).skip(skip).limit(Number(limit)),
    Product.countDocuments(query)
  ]);

  return {
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: Number(page),
    products
  };
};




export const getProductById = async (productId) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new errorHandle(404, "Sản phẩm không tồn tại hoặc đã bị xoá.");
  }

  return product;
};



export const createProduct = async (productData) => {
  const existingProduct = await Product.findOne({ name: productData.name });
  if (existingProduct) {
    throw new errorHandle(409, "Sản phẩm đã tồn tại.");
  }

  productData.slug = generalSlug(productData.name);
  productData.discountPrice = calculateDiscountPrice(productData.price, productData.discount);

  if (productData.flashSale?.start && productData.flashSale?.end) {
    if (!isValidFlashSale(productData.flashSale.start, productData.flashSale.end)) {
      throw new errorHandle(400, "Thời gian Flash Sale không hợp lệ.");
    }
  }

  const newProduct = new Product(productData);
  return await newProduct.save();
};


export const updateProduct = async (productId, updateData) => {
  const product = await Product.findById(productId)
  if (!product) {
    throw new errorHandle(404, "Sản phẩm không tồn tại.");
  }

  if (updateData.name) {
    updateData.slug = generalSlug(updateData.name);
  }

  if (updateData.price !== undefined || updateData.discount !== undefined) {
    updateData.discountPrice = calculateDiscountPrice(
      updateData.price ?? product.price,
      updateData.discount ?? product.discount
    );
  }

  if (updateData.flashSaleStart || updateData.flashSaleEnd) {
    if (!isValidFlashSale(updateData.flashSaleStart ?? product.flashSaleStart, updateData.flashSaleEnd ?? product.flashSaleEnd)) {
      throw new errorHandle(400, "Thời gian Flash Sale không hợp lệ.");
    }
  }

  Object.assign(product, updateData);
  return await product.save();
};


export const deleteProduct = async (productId) => {
  const deletedProduct = await Product.findByIdAndDelete(productId);

  if (!deletedProduct) {
    throw new Error("Sản phẩm không tồn tại!");
  }

  return deletedProduct
};


// export const getProduct = async ({ page = 1, limit = 10, sort, search }) => {
//   const filter = {};
//   if (search) {
//     filter.name = { $regex: search, $options: "i" };
//   }

//   const sortOptions = {
//     price_asc: { price: 1 },
//     price_desc: { price: -1 },
//     rating_desc: { rating: -1 },
//     name_asc: { name: 1 },
//     name_desc: { name: -1 },
//     createdAt_desc: { createdAt: -1 },
//     createdAt_asc: { createdAt: 1 },
//     view_desc: { view: -1 },
//   };

//   const sortQuery = sortOptions[sort] || {};

//   const skip = (parseInt(page) - 1) * parseInt(limit);

//   const products = await Product.find(filter)
//     .sort(sortQuery)
//     .skip(skip)
//     .limit(parseInt(limit));

//   const total = await Product.countDocuments(filter);

//   return {
//     total,
//     totalPages: Math.ceil(total / limit),
//     currentPage: parseInt(page),
//     products,
//   };
// };
