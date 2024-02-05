import { IndianRupee } from "lucide-react";
import { MENU_CARD_IMAGES } from "../utils/constants";
import Nonveg from "../assets/Nonveg.png";
import Veg from "../assets/Veg.png";

const MenuItems = ({ imageId, description, name, price, isVeg, isVegg }) => {
  return (
    <>
      {isVegg ? (
        <div
          className={`w-full justify-between border-b pb-8 ${
            isVeg == 1 ? "flex" : "hidden"
          }`}
        >
          <div className="w-3/4">
            <img
              src={isVeg === 1 ? Veg : Nonveg}
              alt="Veg-Nonveg"
              className="w-5"
            />
            <p className="text-[#3E4152] font-medium">{name}</p>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-3 text-[#3E4152] pb-0.5" />
              <p className="text-sm text-[#3E4152]">{price / 100}</p>
            </div>
            <p className="text-xs text-[#b4b5b9] font-light">{description}</p>
          </div>
          <div className="w-32 h-24 border bg-[#F0E4CF] rounded-lg relative">
            <img
              src={MENU_CARD_IMAGES + imageId}
              className="w-full h-full object-cover rounded-lg bg-slate-300"
              alt=""
            />
            <button className="px-8 text-[#60B246] py-1.5 hover:shadow-md transition-all duration-300 border text-sm font-semibold border-[#D4D5D9] bg-white rounded-md absolute -bottom-3 left-1/2 -translate-x-1/2">
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className={"w-full flex justify-between border-b pb-8"}>
          <div className="w-3/4">
            <img
              src={isVeg === 1 ? Veg : Nonveg}
              alt="Veg-Nonveg"
              className="w-5"
            />
            <p className="text-[#3E4152] font-medium">{name}</p>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-3 text-[#3E4152] pb-0.5" />
              <p className="text-sm text-[#3E4152]">{price / 100}</p>
            </div>
            <p className="text-xs text-[#b4b5b9] font-light">{description}</p>
          </div>
          <div className="w-32 h-24 border bg-[#F0E4CF] rounded-lg relative">
            <img
              src={MENU_CARD_IMAGES + imageId}
              className="w-full h-full object-cover rounded-lg bg-slate-300"
              alt=""
            />
            <button className="px-8 text-[#60B246] py-1.5 hover:shadow-md transition-all duration-300 border text-sm font-semibold border-[#D4D5D9] bg-white rounded-md absolute -bottom-3 left-1/2 -translate-x-1/2">
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItems;
