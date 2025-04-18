// productData.js
// Dummy data for product model

const productData = [
  {
    _id: "65f7a3b1c82f265e34a8721a",
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    price: 32990000,
    discount: 5,
    discountPrice: 31340500,
    stock: 50,
    brand: {
      _id: "65f7a3b1c82f265e34a8721a",
      name: "Apple",
    },
    category: {
      _id: "65f7a3b1c82f265e34a8721b",
      name: "Smartphone",
    },
    images: [
      "https://example.com/images/iphone15-pro-max-1.jpg",
      "https://example.com/images/iphone15-pro-max-2.jpg",
      "https://example.com/images/iphone15-pro-max-3.jpg",
    ],
    colors: [
      "Titanium Black",
      "Titanium White",
      "Titanium Blue",
      "Titanium Natural",
    ],
    ram: [
      {
        size: "8GB",
        priceDifference: 0,
      },
    ],
    storage: [
      {
        capacity: "256GB",
        priceDifference: 0,
      },
      {
        capacity: "512GB",
        priceDifference: 4000000,
      },
      {
        capacity: "1TB",
        priceDifference: 8000000,
      },
    ],
    description:
      "iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, camera 48MP cải tiến và thiết kế khung titan cao cấp.",
    specifications: {
      display: "6.7-inch Super Retina XDR OLED, 120Hz",
      processor: "A17 Pro",
      camera: "48MP main + 12MP ultrawide + 12MP telephoto",
      battery: "4422 mAh",
      os: "iOS 17",
      weight: "221g",
    },
    rating: 4.8,
    isFeatured: true,
    view: 5247,
  },
  {
    _id: "65f7a3b1c82f265e34a8721c",
    name: "Samsung Galaxy S23 Ultra",
    slug: "samsung-galaxy-s23-ultra",
    price: 28990000,
    discount: 10,
    discountPrice: 26091000,
    stock: 35,
    brand: {
      _id: "65f7a3b1c82f265e34a8721c",
      name: "Samsung",
    },
    category: {
      _id: "65f7a3b1c82f265e34a8721b",
      name: "Smartphone",
    },
    images: [
      "https://example.com/images/samsung-s23-ultra-1.jpg",
      "https://example.com/images/samsung-s23-ultra-2.jpg",
      "https://example.com/images/samsung-s23-ultra-3.jpg",
    ],
    colors: ["Phantom Black", "Cream", "Green", "Lavender"],
    ram: [
      {
        size: "12GB",
        priceDifference: 0,
      },
    ],
    storage: [
      {
        capacity: "256GB",
        priceDifference: 0,
      },
      {
        capacity: "512GB",
        priceDifference: 3000000,
      },
      {
        capacity: "1TB",
        priceDifference: 6000000,
      },
    ],
    description:
      "Samsung Galaxy S23 Ultra với bút S-Pen tích hợp, camera 200MP đột phá và hiệu năng hàng đầu.",
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X, 120Hz",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP main + 12MP ultrawide + 10MP telephoto + 10MP telephoto",
      battery: "5000 mAh",
      os: "Android 13, One UI 5.1",
      weight: "234g",
    },
    rating: 4.7,
    isFeatured: true,
    view: 4876,
  },
  {
    _id: "65f7a3b1c82f265e34a8721b",
    name: "Xiaomi 13 Pro",
    slug: "xiaomi-13-pro",
    price: 21990000,
    discount: 15,
    discountPrice: 18691500,
    stock: 25,
    brand: {
      _id: "65f7a3b1c82f265e34a8721d",
      name: "Xiaomi",
    },
    category: {
      _id: "65f7a3b1c82f265e34a8721b",
      name: "Smartphone",
    },
    images: [
      "https://example.com/images/xiaomi-13-pro-1.jpg",
      "https://example.com/images/xiaomi-13-pro-2.jpg",
      "https://example.com/images/xiaomi-13-pro-3.jpg",
    ],
    colors: ["Ceramic Black", "Ceramic White", "Flora Green"],
    ram: [
      {
        size: "12GB",
        priceDifference: 0,
      },
    ],
    storage: [
      {
        capacity: "256GB",
        priceDifference: 0,
      },
      {
        capacity: "512GB",
        priceDifference: 2500000,
      },
    ],
    description:
      "Xiaomi 13 Pro với camera Leica 50MP, sạc siêu nhanh 120W và màn hình AMOLED E6.",
    specifications: {
      display: "6.73-inch LTPO AMOLED, 120Hz",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Leica main + 50MP ultrawide + 50MP telephoto",
      battery: "4820 mAh",
      os: "Android 13, MIUI 14",
      weight: "210g",
    },
    rating: 4.5,
    isFeatured: false,
    view: 3254,
  },
  {
    _id: "65f7a3b1c82f265e34a8721a",

    name: "MacBook Pro 16 M3 Max",
    slug: "macbook-pro-16-m3-max",
    price: 75990000,
    discount: 0,
    discountPrice: 75990000,
    stock: 10,
    brand: {
      _id: "65f7a3b1c82f265e34a8721a",
      name: "Apple",
    },
    category: {
      _id: "65f7a3b1c82f265e34a8721e",
      name: "Laptop",
    },
    images: [
      "https://example.com/images/macbook-pro-16-m3-max-1.jpg",
      "https://example.com/images/macbook-pro-16-m3-max-2.jpg",
      "https://example.com/images/macbook-pro-16-m3-max-3.jpg",
    ],
    colors: ["Space Black", "Silver"],
    ram: [
      {
        size: "32GB",
        priceDifference: 0,
      },
      {
        size: "64GB",
        priceDifference: 10000000,
      },
      {
        size: "96GB",
        priceDifference: 20000000,
      },
    ],
    storage: [
      {
        capacity: "1TB",
        priceDifference: 0,
      },
      {
        capacity: "2TB",
        priceDifference: 8000000,
      },
      {
        capacity: "4TB",
        priceDifference: 16000000,
      },
      {
        capacity: "8TB",
        priceDifference: 32000000,
      },
    ],
    description:
      "MacBook Pro 16 inch với chip M3 Max mạnh mẽ, màn hình Liquid Retina XDR và thời lượng pin lên đến 18 giờ.",
    specifications: {
      display: "16-inch Liquid Retina XDR, 120Hz",
      processor: "Apple M3 Max",
      memory: "Up to 96GB unified memory",
      storage: "Up to 8TB SSD",
      gpu: "Up to 40-core GPU",
      battery: "100Wh, up to 18 hours",
      weight: "2.15kg",
    },
    rating: 4.9,
    isFeatured: true,
    view: 2867,
  },
  {
    _id: "65f7a3b1c82f265e34a8721f",

    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    price: 8490000,
    discount: 7,
    discountPrice: 7895700,
    stock: 60,
    brand: {
      _id: "65f7a3b1c82f265e34a8721f",
      name: "Sony",
    },
    category: {
      _id: "65f7a3b1c82f265e34a87220",
      name: "Headphones",
    },
    images: [
      "https://example.com/images/sony-wh-1000xm5-1.jpg",
      "https://example.com/images/sony-wh-1000xm5-2.jpg",
      "https://example.com/images/sony-wh-1000xm5-3.jpg",
    ],
    colors: ["Black", "Platinum Silver", "Midnight Blue"],
    ram: [],
    storage: [],
    description:
      "Tai nghe chống ồn WH-1000XM5 mới nhất của Sony với 8 micro để chống ồn tốt hơn và chất lượng âm thanh được cải thiện.",
    specifications: {
      driver: "30mm carbon fiber composite driver",
      battery: "Up to 30 hours with ANC on",
      charging: "USB-C, 3 hours full charge",
      weight: "250g",
      connectivity: "Bluetooth 5.2, 3.5mm jack",
      features: "LDAC, DSEE Extreme, 360 Reality Audio",
    },
    rating: 4.8,
    isFeatured: false,
    view: 3489,
  },
];

export default productData;
