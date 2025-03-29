import React, { useState } from 'react';
import { ButtonGroup } from "@material-tailwind/react";
import { FaCartPlus, FaHeart, FaRegHeart } from 'react-icons/fa6';
import parse from "html-react-parser";
import formatPrice from '../../../utils/formatPrice';
import QuantitySelector from '../../common/QuantitySelector';


const fakeItem = {
  name: "Bonestack Tank Top",
  rating: 4,
  reviews: [{ id: 1, content: "Great product!" }, { id: 2, content: "Very comfortable!" }],
  price: 1830000,
  description: "A lightweight and comfortable tank top made of high-quality materials. Perfect for workouts and casual wear.",
  ram: ["4GB", "8GB", "16GB"],
  storage: ["128GB", "256GB", "512GB"],
  category: "Clothing",
  brand: "Wear.AI",
  isFavorite: false,
  availableSizes: ["Small", "Medium", "Large"],
  quantity: 1,
};

const FooterIconContact = [
  { id: 1, icon: "🌐", name: "Website" },
  { id: 2, icon: "📘", name: "Facebook" },
  { id: 3, icon: "🐦", name: "Twitter" },
  { id: 4, icon: "📸", name: "Instagram" },
];


const ProductInfo = () => {
  const [item, setItem] = useState(fakeItem);
  const [quantity, setQuantity] = useState(item.quantity);
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium text-darkPrimary">{item?.name}</h1>
        {/* <div className="flex items-center gap-3">
          <Rating value={item?.rating} readonly />
          <span className="capitalize text-gray text-opacity-60">
            ( {item?.reviews?.length} reviews 2)
          </span>
        </div> */}
        <div className='text-sm text-grayColor'>
          Danh mục: điện thoại
        </div>
        {/* <LikeButton href={window.location.href}></LikeButton> */}
        <h2 className="text-2xl font-medium text-darkPrimary">
          {formatPrice(item?.price)}
        </h2>
        {/* <div className="flex items-center gap-3 capitalize">
          <span>ram: </span>
          {item?.ram?.map((item) => (
            <div onClick={onClick} className="p-2 border rounded border-gray border-opacity-20 text-darkPrimary">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span>storage: </span>
          {item?.storage?.map((item) => (
            <div className="p-2 border rounded border-gray border-opacity-20 text-darkPrimary">
              {item}
            </div>
          ))}
        </div> */}
        <div className="text-sm font-normal text-gray italic leading-6 overflow-hidden">
          {parse(item?.description)}
        </div>
        <div className="flex items-center gap-5 text-sm text-dark text-opacity-90">
          <span className='capitalize text-dark font-semibold'>ram</span>
          <ButtonGroup className='gap-3 rounded-none' variant="outlined">
            {item.ram.map((ram) => (
              <button key={ram} className='text-sm  px-3 py-2 border border-textColor'>{ram}</button>
            ))}
          </ButtonGroup>
        </div>
        <div className="flex items-center gap-5 text-sm text-dark text-opacity-90">
          <span className='capitalize text-dark font-semibold'>availableSizes</span>
          <ButtonGroup className='gap-3 rounded-none' variant="outlined">
            {item.availableSizes.map((ram) => (
              <button key={ram} className='text-sm  px-3 py-2 border border-textColor'>{ram}</button>

            ))}
          </ButtonGroup>
        </div>
        {/* quantity */}
        <div className="flex items-center gap-5 text-sm text-dark text-opacity-90">
          <span className='capitalize text-dark font-semibold'>Quantity</span>
          <QuantitySelector></QuantitySelector>
        </div>
        {/* add and wishlist */}
        <div className="flex items-center gap-10 mb-5">
          <div
            // onClick={onClick}
            className="flex items-center justify-center gap-5 p-4 uppercase bg-white border border-gray border-opacity-20 text-yellowColor max-w-[250px] w-full  hover:bg-yellowColor hover:text-white"
          >
            <span>
              <FaCartPlus />
            </span>
            <span className='font-semibold'>add to carts</span>
          </div>

          <button
            // onClick={handleAddToWishlist}
            className="flex items-center gap-5 text-sm"
          >
            <span className="text-yellowColor">
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </span>
            <span
              className={`${isFavorite ? "text-yellowColor underline" : "text-black"
                }`}
            >
              Add to Wishlist
            </span>
          </button>
        </div>
        {/* category */}
        {/* <div className="py-5 text-sm font-light capitalize border-t text-gray border-gray border-opacity-2">
                    Danh mục: {item?.category + " , " + item?.brand}
                </div> */}
        {/* share */}
        <div className="flex items-center gap-3 text-sm capitalize">
          share:{" "}
          <div className="flex items-center gap-2">
            {FooterIconContact.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center p-2 text-sm text-white transition duration-300 bg-black border border-black rounded-full bg-opacity-85 hover:bg-white hover:text-black "
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo