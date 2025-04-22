import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("Tên sản phẩm là bắt buộc").trim(),
  slug: yup.string().lowercase().nullable(), // có thể để optional
  price: yup
    .number()
    .required("Giá sản phẩm là bắt buộc")
    .min(0, "Giá phải lớn hơn hoặc bằng 0"),
  discount: yup.number().min(0, "Giảm giá phải từ 0 trở lên").default(0),
  discountPrice: yup
    .number()
    .min(0, "Giá sau giảm phải từ 0 trở lên")
    .nullable(),
  stock: yup
    .number()
    .required("Số lượng tồn kho là bắt buộc")
    .min(0, "Tồn kho phải từ 0 trở lên"),
  brand: yup.string().required("Thương hiệu là bắt buộc"),
  category: yup.string().required("Danh mục là bắt buộc"),
  images: yup
    .array()
    .of(yup.string().url("Hình ảnh phải là URL hợp lệ"))
    .min(1, "Phải có ít nhất một hình ảnh"),
  colors: yup.array().of(yup.string()).nullable(),

  ram: yup.array().of(
    yup.object().shape({
      size: yup.string().required("Kích thước RAM là bắt buộc"),
      priceDifference: yup
        .number()
        .min(0, "Chênh lệch giá RAM phải từ 0 trở lên")
        .default(0),
    }),
  ),

  storage: yup.array().of(
    yup.object().shape({
      capacity: yup.string().required("Dung lượng là bắt buộc"),
      priceDifference: yup
        .number()
        .min(0, "Chênh lệch giá bộ nhớ phải từ 0 trở lên")
        .default(0),
    }),
  ),

  description: yup.string().required("Mô tả là bắt buộc"),
  specifications: yup
    .object()
    .required("Thông số kỹ thuật là bắt buộc")
    .typeError("Thông số kỹ thuật phải là một object"),

  rating: yup
    .number()
    .min(0, "Đánh giá phải từ 0 đến 5")
    .max(5, "Đánh giá phải từ 0 đến 5")
    .default(0),
  isFeatured: yup.boolean().default(false),
  view: yup.number().min(0, "Lượt xem phải từ 0 trở lên").default(0),
});
