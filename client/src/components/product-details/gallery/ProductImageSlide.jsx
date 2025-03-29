import React, { useState } from "react";
import clsx from "clsx"; // Giúp viết className gọn hơn

const ProductImageSlide = ({ images = [] }) => {
  const [image, setImage] = useState(images[0] || "");

  return (
    <div>
      <div className="grid items-start grid-cols-[max(100px)_1fr] gap-3">
        {/* Danh sách hình ảnh nhỏ */}
        <div className="grid w-full grid-rows-4 gap-3">
          {images?.length > 0 &&
            images.map((img, index) => (
              <div
                key={img || index} // Tránh key trùng lặp
                onClick={() => image !== img && setImage(img)}
                className={clsx(
                  "max-w-[100px] w-full h-[100px] cursor-pointer",
                  image === img && "border border-yellow-400"
                )}
              >
                <img
                  className="object-cover w-full h-full"
                  src={img}
                  alt={`Product ${index}`}
                />
              </div>
            ))}
        </div>

        {/* Hình ảnh lớn */}
        <div className="w-full h-full">
          <img
            className="object-contain w-full max-h-[474px]"
            src={image}
            alt="Selected product"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlide;
