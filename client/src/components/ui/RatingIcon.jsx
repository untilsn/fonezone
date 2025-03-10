import React, { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

const DEFAULT_COUNT = 5;
const DEFAULT_ICON_SIZE = 16;
const DEFAULT_COLOR = "yellow";

const ratedIcon = (iconSize, color) => (
  <IoStar style={{ fontSize: iconSize || DEFAULT_ICON_SIZE, color: color }} />
);

const unRatedIcon = (iconSize) => (
  <IoStarOutline
    style={{
      fontSize: iconSize || DEFAULT_ICON_SIZE,
      color: "grey", // Màu mặc định cho biểu tượng chưa đánh giá
    }}
  />
);

const RatingIcon = ({
  count = DEFAULT_COUNT,
  defaultRating = 0,
  iconSize,
  color = DEFAULT_COLOR,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    localStorage.setItem("starRating", ratingValue);
    if (onRatingChange) onRatingChange(ratingValue); // Gọi hàm callback nếu có
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, index) => {
        const isRated =
          index < (temporaryRating || rating); // Kiểm tra trạng thái đánh giá

        return (
          <div
            key={index}
            className="cursor-pointer transition-all"
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index + 1)}
          >
            {isRated ? ratedIcon(iconSize, color) : unRatedIcon(iconSize)}
          </div>
        );
      })}
    </div>
  );
};

export default RatingIcon;
