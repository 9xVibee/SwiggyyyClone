import {
  BadgePercent,
  ChevronDown,
  LifeBuoy,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      {sideBar && <SideBar/>}
      <div className="w-screen flex justify-between items-center px-40 py-4">
        <div className="w-[28%] flex justify-between items-center">
          <img
            className="w-8 hover:scale-110 transition-all duration-300 ease-in-out"
            src={logo}
            alt="logo"
          />
          <div className="flex items-center gap-2 group hover:cursor-pointer">
            <div className="font-bold border-b-2 border-[#3D4152] text-sm text-[#3D4152] group-hover:text-[#FC8019] group-hover:border-[#FC8019] transition-all duration-300 ease-in-out">
              Home
            </div>
            <div className="text-xs text-[#74767e] group-hover:text-[#93959F] font-semibold transition-all duration-1000 ease-in-out">
              789, North Buckingham Street...
            </div>
            <ChevronDown size={26} color="#fc7f18" strokeWidth={2} onClick={() => setSideBar(true)}/>
          </div>
        </div>
        <div className="flex justify-between items-center w-[50%]">
          <div className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]">
            <Search />
            <div>Search</div>
          </div>
          <div className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]">
            <BadgePercent />
            <div>
              Offers
              <sup className="text-xs font-bold text-[#FC8019]">NEW</sup>
            </div>
          </div>
          <div className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]">
            <LifeBuoy />
            <div>Help</div>
          </div>
          <div className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]">
            <User />
            <div>User</div>
          </div>
          <div className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]">
            <ShoppingCart />
            <div>Cart</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
