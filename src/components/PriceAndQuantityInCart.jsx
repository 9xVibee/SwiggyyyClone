import useAddToCart from "../hooks/useAddToCart";
import { useUserDetails } from "../utils/store";

/* eslint-disable react/prop-types */
const PriceAndQuantityInCart = ({ val }) => {
  const { handleAddToCart } = useAddToCart();
  const { removeItemFromCart } = useUserDetails();

  return (
    <div className="w-full flex items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="border border-[#0F8A65] p-[0.1rem]">
          <div className="w-[0.6rem] h-[0.6rem] bg-[#0F8A65] rounded-full"></div>
        </div>
        <div>
          <p className="text-[1rem] line-clamp-1">{val[2]}</p>
        </div>
      </div>
      <div className="flex gap-3 items-center border px-2 font-bold text-[#0F8A65]">
        <button
          className="mb-[0.1rem] text-black"
          onClick={() => {
            removeItemFromCart(val[0]);
          }}
        >
          -
        </button>
        <p className="text-[0.8rem]">{val.quantity}</p>
        <button
          className="mb-1"
          onClick={() => {
            handleAddToCart(val[0]);
          }}
        >
          +
        </button>
      </div>
      <p>₹{(val[3] / 100) * val.quantity}</p>
    </div>
  );
};

export default PriceAndQuantityInCart;
