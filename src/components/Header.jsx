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
import AddressSideBar from "./AddressSideBar";
import { Link, useLocation } from "react-router-dom";
import AuthPage from "./AuthPage";
import { CgMenuRight } from "react-icons/cg";
import HeaderSmall from "./HeaderSmall";

const Header = () => {
  const [isAddressSideBar, setIsAddressSideBar] = useState(false);
  const [isAuthCompOpen, setIsAuthCompOpen] = useState(false);
  const [isHeaderSM, setIsHeaderSM] = useState(false);
  const [isLogin, setIsLogin] = useState("login");
  const location = useLocation();

  return (
    <>
      {<HeaderSmall isHeaderSM={isHeaderSM} setIsHeaderSM={setIsHeaderSM} />}
      {
        <AddressSideBar
          isAddressSideBar={isAddressSideBar}
          setIsAddressSideBar={setIsAddressSideBar}
        />
      }
      {
        <AuthPage
          setIsLogin={setIsLogin}
          isLogin={isLogin}
          setIsAuthCompOpen={setIsAuthCompOpen}
          isAuthCompOpen={isAuthCompOpen}
        />
      }
      {(isAuthCompOpen || isAddressSideBar) && (
        <div
          className="w-full h-full bg-[#00000081] fixed z-20 z-overflow-hidden"
          onClick={() => {
            isAddressSideBar
              ? setIsAddressSideBar(false)
              : setIsAuthCompOpen(false);
          }}
        ></div>
      )}

      {/* Main Div  */}
      <div
        className={`w-full flex justify-between items-center px-5 sm:px-10 lg:px-14 xl:px-40 py-3 md:py-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
      >
        <div className="w-[80%] sm:w-[45%] lg:w-[34%] xl:w-[28%] flex gap-4  sm:gap-2 sm:justify-between items-center">
          <Link
            to={"/"}
            className="w-7 sm:w-8 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <img src={logo} alt="logo" />
          </Link>
          {location.pathname === "/help" ? (
            <h1 className="mr-60 font-extrabold text-sm text-[#3D4152]">
              HELP
            </h1>
          ) : (
            <>
              <div className="flex items-center gap-2 group hover:cursor-pointer">
                <div className="font-bold border-b-2 border-[#3D4152] text-xs sm:text-sm text-[#3D4152] group-hover:text-[#FC8019] group-hover:border-[#FC8019] transition-all duration-300 ease-in-out">
                  Home
                </div>
                <div className="text-[10px] sm:text-xs text-[#686a70] group-hover:text-[#a7aab5] text-nowrap font-semibold transition-all duration-300 ease-in-out">
                  789, North Buckingham Street...
                </div>
                <ChevronDown
                  size={26}
                  color="#fc7f18"
                  strokeWidth={2}
                  onClick={() => setIsAddressSideBar(true)}
                />
              </div>
            </>
          )}
        </div>
        <CgMenuRight
          className=" text-3xl text-[#3D4152] lg:hidden"
          onClick={() => setIsHeaderSM(true)}
        />
        <div className="hidden lg:flex justify-between items-center w-[55%] xl:w-[50%]">
          <Link to="/search">
            <div
              className={`flex items-center font-semibold gap-2 transition-all duration-300 ease-in-out ${
                location.pathname === "/search"
                  ? "text-[#FC8019]"
                  : "text-[#3D4152] hover:text-[#FC8019]"
              }`}
            >
              <Search className="scale-[.65] lg:scale-[.80] xl:scale-100" />
              <div className="">Search</div>
            </div>
          </Link>
          <Link
            to="/offer"
            className={`flex items-center font-semibold gap-2 transition-all duration-300 ease-in-out ${
              location.pathname === "/offer"
                ? "text-[#FC8019]"
                : "text-[#3D4152] hover:text-[#FC8019]"
            }`}
          >
            <BadgePercent className="scale-[.65] lg:scale-[.80] xl:scale-100" />
            <div className="">
              Offers
              <sup className="text-[9px] xl:text-[11px] font-bold text-[#FC8019]">
                NEW
              </sup>
            </div>
          </Link>
          <Link
            to="/help"
            className={`flex items-center font-semibold gap-2 transition-all duration-300 ease-in-out ${
              location.pathname === "/help"
                ? "text-[#FC8019]"
                : "text-[#3D4152] hover:text-[#FC8019]"
            }`}
          >
            <LifeBuoy className="scale-[.65] lg:scale-[.80] xl:scale-100" />
            <div>Help</div>
          </Link>
          <div
            className="cursor-pointer flex items-center text-[#3D4152] font-semibold gap-2 transition-all duration-300 ease-in-out hover:text-[#FC8019]"
            onClick={() => setIsAuthCompOpen(true)}
          >
            <User className="scale-[.65] lg:scale-[.80] xl:scale-100" />
            <div>Login</div>
          </div>
          <Link
            to={"/checkout"}
            className={`flex items-center font-semibold gap-2 transition-all duration-300 ease-in-out ${
              location.pathname === "/checkout"
                ? "text-[#FC8019]"
                : "text-[#3D4152] hover:text-[#FC8019]"
            }`}
          >
            <ShoppingCart className="scale-[.65] lg:scale-[.80] xl:scale-100" />
            <div>Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
