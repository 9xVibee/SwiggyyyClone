import { ChevronDown, ChevronUp } from "lucide-react";
import MenuItems from "./MenuItems";
import { useState } from "react";

const MenuCards = ({ title, itemCards, isVegg }) => {
  const [isOpen, setIsOpen] = useState(false);
  return !title || !itemCards?.length ? (
    ""
  ) : (
    <>
      <div className="px-4 flex flex-col gap-5">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="font-bold text-[#3E4152] text-lg">
            {title} ({itemCards?.length})
          </h1>
          <p className="font-bold text-[#3E4152]">
            {isOpen ? <ChevronDown /> : <ChevronUp />}
          </p>
        </div>
        {isOpen &&
          itemCards?.map((data) => (
            <MenuItems
              {...data?.card?.info}
              key={data?.card?.info?.id}
              isVegg={isVegg}
            />
          ))}
      </div>
      <div className={`h-3 w-full bg-[#F1F1F6] ${isOpen ? "-mt-6" : ""}`}></div>
    </>
  );
};

export default MenuCards;
