import React, { useState } from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import { Rating } from "@material-tailwind/react";


const ProductCard = ({ item, classes, size = "normal" }) => {
  const [isHover, setIsHover] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);

  // const cardStyles = {
  //   normal: "max-w-[275px] h-[420px]",
  //   small: "max-w-[200px] h-[340px]",
  // };

  const imageStyles = {
    normal: "h-[275px]",
    small: "h-[200px]",
  };

  const textStyles = {
    normal: "text-base",
    small: "text-sm",
  };


  return (
    <div className={`
    group hover:shadow-itemShadow transition duration-500 relative border border-gray border-opacity-15 max-w-[270px] w-full bg-white ${classes}`}>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative w-full overflow-hidden">
        {/* Image */}
        <NavLink
          to="#"
        // to={`/product?id=${item?._id}`}
        >
          <div className={`relative w-full overflow-hidden p-2 ${imageStyles[size]}`}>
            <img
              className={`absolute top-0 right-0 left-0 w-full h-full object-contain p-2 transition duration-500 
                ${isHover ? "opacity-0 scale-105" : "opacity-100 scale-100"} 
                ${item?.type === "unknown" ? "blur-xl" : ""}`}
              src="https://m.media-amazon.com/images/I/61TTdTnaEeL._AC_SL1500_.jpg"
              alt="product"
            />
            <img
              className={`absolute top-0 right-0 left-0 w-full h-full object-contain p-2 transition duration-500 
                ${isHover ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
              src="https://m.media-amazon.com/images/I/71Sbx9zQN3L._AC_SL1500_.jpg"
              alt="product alternative"
            />
          </div>
        </NavLink>
        {/* Favorite */}
        <div className="absolute w-7 h-7 right-4 top-4 flex items-center justify-center rounded-full text-light text-sm bg-dark-primary transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-[50%] group-hover:translate-x-[5%]">
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </div>
        {/* Add to Cart */}
        <button className="absolute bottom-0 left-0 right-0 flex items-center opacity-20 hover:bg-yellow-dark justify-center gap-3 h-[40px] bg-dark-primary text-light text-sm translate-y-[100%] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition duration-300">
          <FaCartPlus className={`${isCart ? "text-yellow" : "text-white"} hover:text-yellow text-sm`} />
          <div>
            Thêm giỏ hàng
          </div>
        </button>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-2 px-3 py-4 bg-white">
        {/* <div className="capitalize text-dark text-opacity-80 font-normal text-[13px] truncate">Điện thoại, Ipad, Tai Nghe</div> */}
        <div>
          <NavLink to={`/product?id=${item?._id}`}
            className="overflow-hidden text-darkPrimary text-center text-sm font-medium overflow-ellipsis h-[16px] line-clamp-2 mb-1">
            SAMSUNG GALAXY J7 PRIME
          </NavLink>
          <div className="flex items-center gap-2 justify-center ">

            <h2 className={`text-yellow-accent text-sm text-center ${textStyles[size]}`}>{formatPrice(20000000)}</h2>
            <h2 className={`text-gray text-sm line-through text-center ${textStyles[size]}`}>{formatPrice(100000)}</h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-nowrap overflow-ellipsis">
          <div className="flex items-center gap-1">
          </div>
          <div className="text-xs text-grayColor">
            0 (review)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
