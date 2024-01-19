/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AccordianDetails = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full flex border-b-2 py-6 cursor-pointer flex-col gap-8"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex w-full justify-between">
        <p className="text-[1.1rem] hover:text-[#FC8019] transition-all duration-300">
          {title}
        </p>
        {!isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>
      {isOpen && (
        <div>
          <p className="text-gray-600 text-[0.9rem]">{description}</p>
        </div>
      )}
    </div>
  );
};

export default AccordianDetails;
