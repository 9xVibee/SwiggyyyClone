import { LocateFixed, X } from "lucide-react";

const AddressSideBar = ({ isAddressSideBar, setIsAddressSideBar }) => {
  const handleAddressSideBar = () => {
    setIsAddressSideBar((prev) => !prev);
  };
  return (
    <>
      <div
        className={`w-[35%] h-screen flex flex-col bg-white z-20 fixed left-0 top-0 pt-8 px-28 gap-8 transition-all 
        duration-500 ${
          isAddressSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <X
          className="text-[#3D4152] cursor-pointer"
          onClick={handleAddressSideBar}
        />
        <input
          type="text"
          placeholder="Enter your area, street name"
          className=" border-[1px] border-[#D4D5D9] py-3 px-5 outline-none focus:shadow-xl"
        />
        <div className="border-[1px] border-[#D4D5D9] py-5 px-5 flex flex-wrap items-center cursor-pointer gap-x-4 group">
          <LocateFixed color="#535665" size={20} />
          <p className="font-medium transition-all duration-300 ease-in-out group-hover:text-[#FC8019]">
            Get current location
          </p>
          <p className=" font-normal text-xs text-[#93959F] pl-9">Using GPS</p>
        </div>
      </div>
    </>
  );
};

export default AddressSideBar;
