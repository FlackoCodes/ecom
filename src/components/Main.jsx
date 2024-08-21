import { useState } from "react";
import { data } from "../data";
import pdtTOneThumb from ".images/image-product-1-thumbnail.jpg";
import pdtOneImg from ".images/image-product-1.jpg";
import pdtTwoThumb from ".images/image-product-2-thumbnail.jpg";
import pdtTwoImg from ".images/image-product-2.jpg";
import pdtThreeThumb from ".images/image-product-3-thumbnail.jpg";
import pdtThreeImg from ".images/image-product-3.jpg";
import pdtFourThumb from ".images/image-product-4-thumbnail.jpg";
import pdtFourImg from ".images/image-product-4.jpg";
import iconCart from "../images/icon-cart.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  increaseCart,
  decreaseCart,
} from "../store/cartStore/cartSlice";

export default function Main() {
  const dispatch = useDispatch();
  const totalInCart = useSelector((state) => state.cart.totalCart);
  const [currentThumbnail, setCurrentThumbnail] = useState(pdtTOneThumb);

  const setImageOne = () => {
    setCurrentThumbnail(pdtTOneThumb);
  };
  const setImageTwo = () => {
    setCurrentThumbnail(pdtTwoThumb);
  };
  const setImageThree = () => {
    setCurrentThumbnail(pdtThreeThumb);
  };
  const setImageFour = () => {
    setCurrentThumbnail(pdtFourThumb);
  };

  const increasProducts = () => {
    return dispatch(increaseCart);
  };

  const decreasProducts = () => {
    return dispatch(decreaseCart);
  };

  return (
    <div className="w-[75%] my-0 mx-auto mt-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div>
            <img src={currentThumbnail} alt="shoe thumbnail" />
          </div>
          <div className="flex flex-col">
            <img onClick={setImageOne} src={pdtOneImg} alt="sneaker image" />
            <img onClick={setImageTwo} src={pdtTwoImg} alt="sneaker image" />
            <img
              onClick={setImageThree}
              src={pdtThreeImg}
              alt="sneaker image"
            />
            <img onClick={setImageFour} src={pdtFourImg} alt="sneaker image" />
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <h1>{item.company}</h1>
              <p>{item.title}</p>
              <div>
                <p>{item.description}</p>
                <div className="flex gap-2">
                  <p>{item.discountedPrice}</p>
                  <span className="bg-black text-white p-2 rounded-sm font-bold">
                    50%
                  </span>
                </div>
                <div>
                  <del>{`$${item.price}`}</del>
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-4">
            <div className="flex items-center justify-between bg-white rounded-sm">
              <FaMinus onClick={decreasProducts} className="text-orange-500" />
              <span>{totalInCart}</span>
              <FaPlus onClick={increasProducts} className="text-orange-500" />
            </div>
            <div>
              <button className="border-none bg-orange-600 rounded-sm flex items-center text-lg font-bold text-black">
                <img src={iconCart} alt="shopping cart" />
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
