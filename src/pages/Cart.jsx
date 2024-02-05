/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useUserDetails } from "../utils/store";
import PriceAndQuantityInCart from "../components/PriceAndQuantityInCart";
import { useEffect, useState } from "react";
import { BadgePercent } from "lucide-react";

const Cart = () => {
  const { restaurantName, itemsInCart } = useUserDetails();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = itemsInCart.reduce((acc, curVal) => {
      return acc + (curVal[3] / 100) * curVal.quantity;
    }, 0);
    setTotalPrice(total);
  });
  return (
    <>
      <div className="w-full h-[100vh] bg-[#E9ECEE] flex justify-center items-center gap-8">
        {/* left Div */}
        <div className="w-[55%] h-[40%] bg-white shadow-lg"></div>
        {/* Right */}
        <div className="w-[23%] h-[90%] bg-white shadow-xl relative overflow-y-scroll cws">
          {itemsInCart.length != 0 ? (
            <>
              <Link to={"/restaurant/123"} className="sticky top-0">
                <div className="w-full h-[5rem] shadow-md flex justify-center items-center px-8 gap-2 bg-white">
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/6067b9c8fcab00e28e4423a4c4cbeaf6"
                    alt=""
                    className="w-[3rem] h-[3rem]"
                  />
                  <div className="w-full flex flex-col">
                    <h1 className="font-semibold">{restaurantName}</h1>
                    <p className="-mt-1 text-[0.8rem]">Camp</p>
                  </div>
                </div>
              </Link>
              <div className="w-full overflow-y-scroll cws px-6 py-4 flex flex-col gap-4">
                {itemsInCart.map((val, key) => (
                  <PriceAndQuantityInCart key={key} val={val} />
                ))}
              </div>
              {/* Suggestion */}
              <div className="w-full flex items-center justify-center">
                <div className="flex w-[88%] gap-2 bg-[#F9F9F9] py-4 px-4 rounded-md">
                  <svg className="_3iLcN w-[0.8rem]" viewBox="0 0 32 32">
                    <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Any Suggestion? we will pass it..."
                    className="bg-[#F9F9F9] text-[0.8rem] w-full outline-none"
                  />
                </div>
              </div>

              {/* Opt in NCD */}
              <div className="flex gap-2 p-4 border w-[90%] mt-8 mx-auto items-start hover:shadow-lg transition-all duration-300 cursor-pointer">
                <input type="checkbox" className="accent-black mt-2" />
                <div>
                  <h1 className="font-semibold text-[1rem]">
                    Opt in for No-contact Delivery
                  </h1>
                  <p className="text-gray-600 text-[0.9rem]">
                    Unwell, or avoiding contact? Please select no-contact
                    delivery. Partner will safely place the order outside your
                    door (not for COD)
                  </p>
                </div>
              </div>

              {/* Coupon */}
              <div className="w-[19.5rem] mt-4 px-8 py-4 mx-auto flex items-center justify-start border-dashed border-2 gap-2 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <BadgePercent className="w-[1.3rem]" />
                <p className="font-semibold mb-1 text-gray-700">Apply Coupon</p>
              </div>
              {/* Total Pay */}
              <div className="w-full h-[3.2rem] shadow-inner flex justify-between items-center px-8 gap-2 bg-white sticky bottom-0">
                <p className="font-semibold">TO PAY</p>
                <p className="font-semibold">₹{totalPrice}</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
