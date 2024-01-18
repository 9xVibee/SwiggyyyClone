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
import { Link } from "react-router-dom";
import AuthPage from "./AuthPage";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const [isAuthCompOpen, setIsAuthCompOpen] = useState(false);
  const [isLogin, setIsLogin] = useState("login");
  return (
    <>
      {sideBar && <SideBar />}
      {isAuthCompOpen && (
        <AuthPage
          setIsLogin={setIsLogin}
          isLogin={isLogin}
          setIsAuthCompOpen={setIsAuthCompOpen}
        />
      )}
      {isAuthCompOpen && (
        <div className="w-full h-full bg-[#0000008e] fixed z-10 overflow-hidden"></div>
      )}
      <div className="w-full flex justify-between items-center px-40 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="w-[28%] flex justify-between items-center">
          <Link
            to={"/"}
            className="w-8 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-2 group hover:cursor-pointer">
            <div className="font-bold border-b-2 border-[#3D4152] text-sm text-[#3D4152] group-hover:text-[#FC8019] group-hover:border-[#FC8019] transition-all duration-300 ease-in-out">
              Home
            </div>
            <div className="text-xs text-[#74767e] group-hover:text-[#93959F] font-semibold transition-all duration-1000 ease-in-out">
              789, North Buckingham Street...
            </div>
            <ChevronDown
              size={26}
              color="#fc7f18"
              strokeWidth={2}
              onClick={() => setSideBar(true)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-[50%] transition-all ">
          <Link to="/search">
            <div className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]">
              <Search />
              <div>Search</div>
            </div>
          </Link>
          <Link
            to={"/offer"}
            className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]"
          >
            <BadgePercent />
            <div>
              Offers
              <sup className=" text-[11px] font-bold text-[#FC8019]">NEW</sup>
            </div>
          </Link>
          <Link
            to={"/help"}
            className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]"
          >
            <LifeBuoy />
            <div>Help</div>
          </Link>
          <div
            className="cursor-pointer flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]"
            onClick={() => setIsAuthCompOpen(true)}
          >
            <User />
            <div>Login</div>
          </div>
          <Link
            to={"/checkout"}
            className="flex items-center text-[#3D4152] font-semibold gap-2 hover:text-[#FC8019]"
          >
            <ShoppingCart />
            <div>Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
