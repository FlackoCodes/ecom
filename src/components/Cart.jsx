import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartStore/cartSlice";
import { data } from "../data";
import { BiTrash } from "react-icons/bi";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalInCart = useSelector((state) => state.cart.totalCart);
  const item = data.map((data) => data);
  console.log(item);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white rounded-md shadow w-[280px] h-[200px]">
      <div>
        <h2 className="font-bold text-lg text-black border-b p-2">Cart</h2>
      </div>
      {!cart?.length ? (
        <div>
          <div className="grid place-content-center min-h-36">
            <h5 className="text-gray-400 mx-auto my-0 w-52">
              your cart is empty, add item to view
            </h5>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-4">
          <div className="w-[90%] mx-auto my-0">
            {item.map((data, index) => (
              <div
                key={index}
                className="flex justify-between gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      className="w-7 h-7 rounded-sm"
                      src={data.image.thumbnail}
                      alt="sneaker thumnail"
                    />
                  </div>
                  <div>
                    <h6 className="tracking-tighter text-sm font-semibold text-gray-300">
                      {data.title}
                    </h6>
                    <p className="text-sm tracking-tight text-gray-400">
                      {data.discountedPrice} X {totalInCart}{" "}
                      {totalInCart && (
                        <span className="font-bold text-black">
                          {data.discountedPrice * totalInCart}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <BiTrash
                    onClick={handleClearCart}
                    className="cursor-pointer text-gray-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button
              onClick={handleClearCart}
              className="text-black font-bold bg-orange-500 w-[90%] rounded-md py-2 px-4"
            >
              checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
