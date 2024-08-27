import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="bg-white rounded-md shadow w-[250px] h-[200px]">
      <div>
        <h2 className="font-bold text-lg text-black border-b p-2">Cart</h2>
      </div>
      {!cart?.length ? (
        <div>
          <div className="grid place-content-center min-h-36">
            <h5 className="text-gray-300">your cart is empty</h5>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div></div>
          <div>
            <button className="text-black font-bold bg-orange-500 rounded-md py-2 px-4">
              checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
