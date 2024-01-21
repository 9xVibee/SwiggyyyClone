/* eslint-disable react/prop-types */
import { PlusCircle, Star } from "lucide-react";
import notFoundImgId from "./../assets/th.jpeg";
import { Link } from "react-router-dom";

const SearchCard = ({
  name,
  imgId,
  dishName,
  price,
  resId,
  handleAddToCart,
  setRecentlyAdded,
}) => {
  return (
    <Link to={`/restaurant/${resId}`}>
      <div className="w-[25rem] h-[15rem] bg-white rounded-lg px-4 py-3 hover:shadow-md cursor-pointer transition-all duration-300">
        <div>
          <div className="flex flex-col gap-[0.2rem] text-[#7E808C]">
            <h1 className="font-bold text-[#686B78] text-[0.9rem]">
              By {name}
            </h1>
            <p className="flex items-center gap-1 text-[0.9rem]">
              <Star width={"1rem"} /> 4.4
            </p>
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex items-start gap-8 mt-3">
          <div>
            <h1 className="font-semibold  text-[1.1rem]">{dishName}</h1>
            <p className="text-[0.88rem]">₹{price / 100}</p>
            <p className="text-[0.85rem] mt-4">
              Tender Juicy Chicken Biryani+ Veg Raita + Ghee + a rich garnish
              of...
            </p>
          </div>
          <div className="rounded-md w-[12rem] h-[5rem] relative">
            <img
              src={
                imgId
                  ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imgId}`
                  : notFoundImgId
              }
              alt=""
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="flex items-center gap-2 absolute bg-[#F4F5F6] px-5 py-1 left-2 shadow-md hover:shadow-none transition-all duration-300 -bottom-4 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                setRecentlyAdded({ name, imgId, dishName, price, resId });
                handleAddToCart(name, imgId, dishName, price, resId);
              }}
            >
              Add <PlusCircle width={"1rem"} className="mt-[0.2rem]" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
