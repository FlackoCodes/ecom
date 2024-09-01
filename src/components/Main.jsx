import { useState } from "react";
import { data } from "../data";
import imageOneThumb from "../images/image-product-1-thumbnail.jpg";
import imageOne from "../images/image-product-1.jpg";
import imageTwoThumb from "../images/image-product-2-thumbnail.jpg";
import imageTwo from "../images/image-product-2.jpg";
import imageThreeThumb from "../images/image-product-3-thumbnail.jpg";
import imageThree from "../images/image-product-3.jpg";
import imageFourThumb from "../images/image-product-4-thumbnail.jpg";
import imageFour from "../images/image-product-4.jpg";

const item = data.map((data) => data);

import iconCart from "../images/icon-cart.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseCart,
  decreaseCart,
} from "../store/cartStore/cartSlice";

export default function Main() {
  const dispatch = useDispatch();
  const totalInCart = useSelector((state) => state.cart.totalCart);
  const cart = useSelector((state) => state.cart.cart);
  const [currentThumbnail, setCurrentThumbnail] = useState(imageOne);

  const setImageOne = () => {
    setCurrentThumbnail(imageOne);
  };
  const setImageTwo = () => {
    setCurrentThumbnail(imageTwo);
  };
  const setImageThree = () => {
    setCurrentThumbnail(imageThree);
  };
  const setImageFour = () => {
    setCurrentThumbnail(imageFour);
  };

  const increasProducts = () => {
    return dispatch(increaseCart());
  };

  const decreasProducts = () => {
    return dispatch(decreaseCart());
  };

  const addItemsToCart = (product) => {
    console.log(cart);
    return dispatch(addToCart(product));
  };

  const disableBtn = () => totalInCart === 0;

  return (
    <div className="w-[70%] my-0 mx-auto mt-4">
      <div className="grid grid-cols-2 place-content-center">
        <div className="flex flex-col" style={{ width: "300px" }}>
          <div className="my-6">
            <img
              className="w-[300px] rounded-md"
              src={currentThumbnail}
              alt="shoe thumbnail"
            />
          </div>
          <div className="flex gap-4 w-[300px]">
            <img
              className="w-[90px] h-16 rounded-md border-transparent active:border-2 active:border-orange-400 transition"
              onClick={setImageOne}
              src={imageOneThumb}
              alt="sneaker image"
            />
            <img
              className="w-[90px] h-16 rounded-md"
              onClick={setImageTwo}
              src={imageTwoThumb}
              alt="sneaker image"
            />
            <img
              className="w-[90px] h-16 rounded-md"
              onClick={setImageThree}
              src={imageThreeThumb}
              alt="sneaker image"
            />
            <img
              className="w-[90px] h-16 rounded-md"
              onClick={setImageFour}
              src={imageFourThumb}
              alt="sneaker image"
            />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          {data.map((item, index) => (
            <div key={index}>
              <h1 className="text-slate-500 font-medium uppercase tracking-wide mt-5">
                {item.company}
              </h1>
              <p className="text-black tracking-wide  text-3xl font-extrabold my-4 w-[300px]">
                {item.title}
              </p>
              <div>
                <p className="my-2 text-gray-400">{item.description}</p>
                <div className="flex gap-4 items-center">
                  <h4 className="font-bold text-2xl text-black">
                    ${item.discountedPrice}
                  </h4>
                  <div className="w-fit">
                    <span className="bg-black text-white p-0.5 text-center text-xs font-bold rounded-sm">
                      50%
                    </span>
                  </div>
                </div>
                <div>
                  <del className="font-bold my-1 text-gray-400">{`$${item.price}`}</del>
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-5 mt-4">
            <div className="flex items-center gap-5 justify-between bg-gray-200 rounded-sm py-1 px-3">
              <FaMinus
                onClick={decreasProducts}
                className="text-orange-500 cursor-pointer"
              />
              <span>{totalInCart}</span>
              <FaPlus
                onClick={increasProducts}
                className="text-orange-500 cursor-pointer"
              />
            </div>
            <div className="flex justify-center">
              <button
                disabled={disableBtn()}
                onClick={() => addItemsToCart(item)}
                className="border-none bg-orange-500 rounded-sm flex items-center text-base font-medium text-black py-2 px-8"
              >
                <img
                  src={iconCart}
                  className="w-4 text-black mr-2"
                  alt="shopping cart"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
