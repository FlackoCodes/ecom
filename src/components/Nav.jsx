// import logo from "../images/logo.svg";
// import avatar from "../images/image-avatar.png";
// import cart from "../images/icon-cart.svg";
// import Cart from "./Cart";
// import { useState } from "react";

// export default function Nav() {
//   const [active, setActive] = useState(false);

//   const showCart = () => {
//     setActive(true);
//   };

//   return (
//     <div className=" w-[80%] my-0 mx-auto border-b">
//       <nav className="flex items-center justify-between my-5">
//         <div className="flex gap-10">
//           <img src={logo} alt="logo" />
//           <ul className="list-none flex items-center capitalize gap-4 font-semibold text-black opacity-50 cursor-pointer">
//             <li>collection</li>
//             <li>men</li>
//             <li>women</li>
//             <li>about</li>
//             <li>contact</li>
//           </ul>
//         </div>
//         <div className="flex items-center gap-4">
//           <div>
//             <img
//               onClick={showCart}
//               className="cursor-pointer"
//               src={cart}
//               alt="shopping cart"
//             />
//           </div>
//           <img
//             className="w-6 h-6 border rounded-full active:border-orange-500 cursor-pointer"
//             src={avatar}
//             alt="avatar"
//           />
//         </div>
//       </nav>
//       <div>{active ? <Cart /> : null}</div>
//     </div>
//   );
// }

import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import Cart from "./Cart";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  const showCart = () => {
    setActive(!active);
  };

  return (
    <div className="w-[80%] my-0 mx-auto border-b">
      <nav className="flex items-center justify-between my-5">
        <div className="flex gap-10">
          <img src={logo} alt="logo" />
          <ul className="list-none flex items-center capitalize gap-4 font-semibold text-black opacity-50 cursor-pointer">
            <li>collection</li>
            <li>men</li>
            <li>women</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {/* Relative positioning for the cart button and cart dropdown */}
          <div className="relative">
            <img
              onClick={showCart}
              className="cursor-pointer"
              src={cart}
              alt="shopping cart"
            />
            {/* Cart dropdown */}
            {active && (
              <div className="absolute right-0 mt-2  bg-white border rounded-md">
                <Cart />
              </div>
            )}
          </div>
          <img
            className="w-6 h-6 border rounded-full active:border-orange-500 cursor-pointer"
            src={avatar}
            alt="avatar"
          />
        </div>
      </nav>
    </div>
  );
}
