export const FILTERLIST = [
  {
    key: "brand",
    title: "Thương hiệu",
    type: "checkbox",
    options: brands.map((brand) => ({
      label: brand.name,
      value: brand.id.toString(),
    })),
  },
  {
    key: "category",
    title: "Danh mục",
    type: "checkbox",
    options: categories.map((category) => ({
      label: category.name,
      value: category.id.toString(),
    })),
  },
  {
    key: "price",
    title: "Khoảng giá",
    type: "range",
    min: 0,
    max: 10000000,
    step: 100000,
  },
];