import { MoveLeft, MoveRight } from "lucide-react";
import useRestaurant from "../hooks/useRestaurant";
import Cards from "./Cards";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RectangleSkeleton } from "./SkeletonLoader";

const SecondData = () => {
  const secondData = useRestaurant(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 4;

  const handleMoveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  const maxIndex =
    secondData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length -
    imagesToShow +
    1;
  const handleMoveRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 2, maxIndex));
    }
  };
  return secondData?.length === 0 ? (
    <RectangleSkeleton />
  ) : (
    <>
      <div className="flex flex-col gap-6 mt-12 border-b-2 pb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Top Food Chains in Pune</h1>
          <div className="flex items-center gap-3 pr-4">
            <div
              className={`p-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out ${
                currentIndex === 0
                  ? "bg-[#EFEFF2] text-[#919295]"
                  : "bg-[#d3d3d8] text-[#25282D]"
              }`}
              onClick={handleMoveLeft}
            >
              <MoveLeft size={20} className="" />
            </div>
            <div
              className={`p-2 rounded-full cursor-pointer transition-all dur duration-200 ease-in-out ${
                currentIndex === maxIndex
                  ? "bg-[#EFEFF2] text-[#919295]"
                  : "bg-[#d3d3d8] text-[#25282D]"
              }`}
              onClick={handleMoveRight}
            >
              <MoveRight size={20} className="" />
            </div>
          </div>
        </div>
        <div className="flex overflow-x-scroll cws gap-8">
          {secondData?.card?.card?.gridElements?.infoWithStyle?.restaurants
            .slice(currentIndex, currentIndex + imagesToShow)
            .map((data) => (
              <Link to={`/restaurant/${data?.info?.id}`} key={data?.info?.id}>
                <Cards {...data?.info} width={288} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default SecondData;
