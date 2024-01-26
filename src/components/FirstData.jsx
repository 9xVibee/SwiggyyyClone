import { MoveLeft, MoveRight } from "lucide-react";
import { FIRST_DATA_IMG_CDN } from "../utils/constants";
import useRestaurant from "../hooks/useRestaurant";
import { useState } from "react";
import { CircleSkeleton } from "./SkeletonLoader";

const FirstData = () => {
  const firstData = useRestaurant(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 7;

  const handleMoveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const maxIndex =
    firstData?.card?.card?.imageGridCards?.info?.length - imagesToShow + 2;
  const handleMoveRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, maxIndex));
    }
  };

  return firstData?.length === 0 ? (
    <CircleSkeleton />
  ) : (
    <>
      <div className="border-b-2 flex flex-col gap-5 relative">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {firstData?.card?.card?.header?.title}
          </h1>
          <div className="flex items-center gap-3 pr-4">
            <div
              className={`p-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out ${
                currentIndex === 0
                  ? "bg-[#EFEFF2] text-[#919295]"
                  : "bg-[#d3d3d8] text-[#25282D]"
              }`}
              onClick={handleMoveLeft}
            >
              <MoveLeft size={20} />
            </div>
            <div
              className={`p-2 rounded-full cursor-pointer transition-all dur duration-200 ease-in-out ${
                currentIndex === maxIndex
                  ? "bg-[#EFEFF2] text-[#919295]"
                  : "bg-[#d3d3d8] text-[#25282D]"
              }`}
              onClick={handleMoveRight}
            >
              <MoveRight size={20} />
            </div>
          </div>
        </div>
        <div className="flex overflow-x-scroll cws gap-8">
          {firstData?.card?.card?.imageGridCards?.info
            .slice(currentIndex, currentIndex + imagesToShow)
            .map((data) => (
              <img
                key={data?.id}
                src={FIRST_DATA_IMG_CDN + data?.imageId}
                className="w-36"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FirstData;
