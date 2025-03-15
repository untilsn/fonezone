export const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Xiaomi" },
  { id: 4, name: "Oppo" },
  { id: 5, name: "Vivo" },
];

export const categories = [
  { id: 1, name: "Điện thoại" },
  { id: 2, name: "Tablet" },
  { id: 3, name: "Laptop" },
  { id: 4, name: "Phụ kiện" },
];

export const FILTERLIST = [
  {
    key: "brand", // Key là chuỗi duy nhất
    title: "Thương hiệu",
    type: "checkbox",
    options: [
      { label: "Apple", value: "1" },
      { label: "Samsung", value: "2" },
      { label: "Xiaomi", value: "3" },
    ],
  },
  {
    key: "category",
    title: "Danh mục",
    type: "checkbox",
    options: [
      { label: "Điện thoại", value: "1" },
      { label: "Tablet", value: "2" },
    ],
  },
  {
    key: "price",
    title: "Khoảng giá",
    type: "range",
    min: 0,
    max: 50000000,
    step: 500000,
  },
  {
    key: "ram",
    title: "Dung lượng RAM",
    type: "checkbox",
    options: [
      { label: "4GB", value: "4" },
      { label: "8GB", value: "8" },
      { label: "16GB", value: "16" },
    ],
  },
];
