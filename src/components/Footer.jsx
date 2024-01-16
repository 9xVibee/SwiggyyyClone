import { PLAYSTORE_LOGO, APPSTORE_LOGO } from "../utils/constants";
import logo from "../assets/Swiggy1.png";
import { ChevronDown } from "lucide-react";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#F0F0F5] px-72 py-6 mt-20">
        <div className="flex items-center justify-between gap-10">
          <div className="text-[#3D4046] font-bold text-3xl max-w-[50%]">
            For better experience,download the Swiggy app now
          </div>
          <div className="flex gap-8">
            <img src={PLAYSTORE_LOGO} alt="Go to Playstore" className="w-48" />
            <img src={APPSTORE_LOGO} alt="Go to Appstore" className="w-48" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#02060C] px-64 pb-24">
        <div className="flex gap-12 justify-between">
          <div className="">
            <img
              src={logo}
              alt="Logo"
              className="w-44 filter brightness-0 invert"
            />
            <p className="text-[#9A9B9E] max-w-56 -mt-8 pl-4">
              © 2023 Bundl Technologies Pvt. Ltd
            </p>
          </div>
          <div className="flex justify-between flex-shrink-0 flex-grow">
            <div className=" mt-12 flex flex-col gap-2">
              <p className="text-white font-bold text-lg">Company</p>
              <p className="text-[#9A9B9E]">About</p>
              <p className="text-[#9A9B9E]">Careers</p>
              <p className="text-[#9A9B9E]">Team</p>
              <p className="text-[#9A9B9E]">Swiggy One</p>
              <p className="text-[#9A9B9E]">Swiggy Instamart</p>
              <p className="text-[#9A9B9E]">Swiggy Genie</p>
            </div>
            <div className=" mt-12 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-lg">Contact Us</p>
                <p className="text-[#9A9B9E]">Help & Support</p>
                <p className="text-[#9A9B9E]">Partner with us</p>
                <p className="text-[#9A9B9E]">Ride with us</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-lg">Legal</p>
                <p className="text-[#9A9B9E]">Terms & Conditions</p>
                <p className="text-[#9A9B9E]">Cookie Policy</p>
                <p className="text-[#9A9B9E]">Privacy Policy</p>
              </div>
            </div>
            <div className=" mt-12 flex flex-col gap-2">
              <p className="text-white font-bold text-lg">We deliver to:</p>
              <p className="text-[#9A9B9E]">Bangalore</p>
              <p className="text-[#9A9B9E]">Gurgaon</p>
              <p className="text-[#9A9B9E]">Hyderabad</p>
              <p className="text-[#9A9B9E]">Delhi</p>
              <p className="text-[#9A9B9E]">Mumbai</p>
              <p className="text-[#9A9B9E]">Pune</p>
              <div className="flex items-center border-[1px] border-[#9A9B9E] mt-2 rounded-lg justify-between px-2 py-1">
                <p className="text-[#9A9B9E] text-xs">589 Cities</p>
                <ChevronDown size={20} color="#9A9B9E" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
