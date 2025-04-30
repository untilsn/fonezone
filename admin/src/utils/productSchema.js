import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("Tên sản phẩm là bắt buộc").trim(),
  slug: yup.string().lowercase().nullable(), // có thể để optional

  price: yup
    .number()
    .typeError("Giá phải là chữ số")
    .required("Giá sản phẩm là bắt buộc")
    .min(0, "Giá phải lớn hơn hoặc bằng 0"),

  discount: yup
    .number()
    .typeError("Giảm giá phải là chữ số")
    .min(0, "Giảm giá phải từ 0 trở lên")
    .default(0),

  discountPrice: yup
    .number()
    .typeError("Giá sau giảm phải là chữ số")
    .min(0, "Giá sau giảm phải từ 0 trở lên")
    .nullable(),

  stock: yup
    .number()
    .typeError("Số lượng tồn kho phải là chữ số")
    .required("Số lượng tồn kho là bắt buộc")
    .min(0, "Tồn kho phải từ 0 trở lên"),

  brand: yup.string().required("Thương hiệu là bắt buộc"),

  category: yup
    .array()
    .of(yup.string())
    .min(1, "Phải chọn ít nhất một danh mục")
    .required("Danh mục là bắt buộc")
    .nullable()
    .transform((value) => (value === null ? [] : value)),

  images: yup
    .array()
    .of(yup.string().url("Hình ảnh phải là URL hợp lệ"))
    .min(1, "Phải có ít nhất một hình ảnh")
    .required("Hình ảnh là bắt buộc"),

  colors: yup
    .array()
    .of(yup.string())
    .nullable()
    .transform((value) => (value === null ? [] : value)),

  ram: yup
    .array()
    .of(
      yup.object().shape({
        size: yup.string().required("Kích thước RAM là bắt buộc"),
        priceDifference: yup.number().default(0),
      }),
    )
    .min(1, "Phải chọn ít nhất một loại RAM")
    .required("RAM là bắt buộc")
    .nullable()
    .transform((value) => (value === null ? [] : value)),

  storage: yup
    .array()
    .of(yup.string())
    .min(1, "Phải chọn ít nhất một loại dung lượng")
    .required("Dung lượng là bắt buộc")
    .nullable()
    .transform((value) => (value === null ? [] : value)),

  description: yup.string().required("Mô tả là bắt buộc"),

  specifications: yup
    .object()
    .required("Thông số kỹ thuật là bắt buộc")
    .typeError("Thông số kỹ thuật phải là một object")
    .default({}),

  rating: yup
    .number()
    .typeError("Đánh giá phải là chữ số")
    .min(0, "Đánh giá phải từ 0 đến 5")
    .max(5, "Đánh giá phải từ 0 đến 5")
    .default(0),

  isFeatured: yup.boolean().default(false),

  view: yup
    .number()
    .typeError("Lượt xem phải là chữ số")
    .min(0, "Lượt xem phải từ 0 trở lên")
    .default(0),
});
