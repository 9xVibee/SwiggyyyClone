import { Dot } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import React from "react";
import { SECOND_DATA_IMG_CDN } from "../utils/constants";

const Cards = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla: { slaString },
  areaName,
  width,
}) => {
  // const widthh = `w-${width}`
  return (
    <>
      <div
        className={`flex flex-col gap-2 hover:scale-[90%] overflow-hidden transition-all duration-500 ease-in-out flex-shrink-0`}
        style={
          {
            width: width
          }
        }
      >
        <img
          src={SECOND_DATA_IMG_CDN + cloudinaryImageId}
          alt=""
          className="h-48 rounded-lg object-cover"
        />
        <div className="pl-3">
          <h2 className="text-[#414449] font-semibold text-lg text-nowrap">
            {name}
          </h2>
          <div className="flex items-center gap-2 font-semibold">
            <div className="flex items-center gap-1 text-[#414449]">
              <FaStar className="text-white p-1 text-xl bg-[#1E943C] rounded-full" />
              <p className="text-[#414449]">{avgRating}</p>
            </div>
            <div className="flex items-center">
              <Dot />
              <p className="text-[#414449]">{slaString}</p>
            </div>
          </div>
          <p className="text-[#676A6D] text-nowrap">{cuisines.join(", ")}</p>
          <p className="text-[#676A6D]">{areaName}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
