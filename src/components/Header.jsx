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

const Header = () => {
  const [isAddressSideBar, setIsAddressSideBar] = useState(false);
  const [isAuthCompOpen, setIsAuthCompOpen] = useState(false);
  const [isLogin, setIsLogin] = useState("login");
  const location = useLocation();

  return (
    <>
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
          className="w-full h-full bg-[#00000081] fixed z-10 overflow-hidden"
          onClick={() => {
            isAddressSideBar
              ? setIsAddressSideBar(false)
              : setIsAuthCompOpen(false);
          }}
        ></div>
      )}
      <div className="w-full flex justify-between items-center px-40 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="w-[28%] flex justify-between items-center">
          <Link
            to={"/"}
            className="w-8 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <img src={logo} alt="logo" />
          </Link>
          {location.pathname == "/help" ? (
            <h1 className="mr-[15rem] font-extrabold text-[0.9rem] text-[#3D4152]">
              HELP
            </h1>
          ) : (
            <>
              <div className="flex items-center gap-2 group hover:cursor-pointer">
                <div className="font-bold border-b-2 border-[#3D4152] text-sm text-[#3D4152] group-hover:text-[#FC8019] group-hover:border-[#FC8019] transition-all duration-300 ease-in-out">
                  Home
                </div>
                <div className="text-xs text-[#686a70] group-hover:text-[#a7aab5] font-semibold transition-all duration-300 ease-in-out">
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
        <div className="flex justify-between items-center w-[50%]">
          <Link to="/search">
            <div
              className={`flex items-center font-semibold gap-2 transition-all duration-300 ease-in-out ${
                location.pathname === "/search"
                  ? "text-[#FC8019]"
                  : "text-[#3D4152] hover:text-[#FC8019]"
              }`}
            >
              <Search />
              <div>Search</div>
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
            <BadgePercent />
            <div>
              Offers
              <sup className=" text-[11px] font-bold text-[#FC8019]">NEW</sup>
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
            <LifeBuoy />
            <div>Help</div>
          </Link>
          <div
            className="cursor-pointer flex items-center text-[#3D4152] font-semibold gap-2 transition-all duration-300 ease-in-out hover:text-[#FC8019]"
            onClick={() => setIsAuthCompOpen(true)}
          >
            <User />
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
            <ShoppingCart />
            <div>Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
