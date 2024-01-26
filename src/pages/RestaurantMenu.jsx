/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { MENU_PAGE_ICONS } from "../utils/constants";
import { FaStar } from "react-icons/fa6";
import { Clock4, IndianRupee } from "lucide-react";
import OfferCard from "../components/OfferCard.jsx";
import useFetchMenu from "../hooks/useFetchMenu.jsx";
import { useState } from "react";

const RestaurantMenu = () => {
  const [isVeg, setIsVeg] = useState(false);

  const { resId } = useParams();
  const restaurantMenu = useFetchMenu(resId);

  return !restaurantMenu ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className=" px-[22rem] py-8">
        <div className="flex gap-2 font-normal text-[9.5px] text-[#7E808C]">
          <p>Home</p>
          <p>/</p>
          <p>{restaurantMenu?.cards[0]?.card?.card?.info?.city}</p>
          <p>/</p>
          <p className="text-[#5C5F6D] font-medium">
            {restaurantMenu?.cards[0]?.card?.card?.info?.name}
          </p>
        </div>
        <div className="mt-10 px-3 flex items-top justify-between border-b-[1px] pb-6">
          <div>
            <p className="text-xl font-bold mb-1.5">
              {restaurantMenu?.cards[0]?.card?.card?.info?.name}
            </p>
            <p className="text-[#7E808C] text-sm">
              {restaurantMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </p>
            <div className="flex gap-2 text-[#7E808C] text-sm mb-3 items-center">
              <p>{restaurantMenu?.cards[0]?.card?.card?.info?.locality}</p>
              <p>
                {
                  restaurantMenu?.cards[0]?.card?.card?.info?.sla
                    ?.lastMileTravelString
                }
              </p>
            </div>
            <div className="flex gap-1.5 items-center text-[#7E808C] text-sm">
              <div className="w-5">
                <img
                  src={
                    MENU_PAGE_ICONS +
                    restaurantMenu?.cards[0]?.card?.card?.info?.feeDetails?.icon
                  }
                  className="object-cover flex-shrink-0"
                  alt=""
                />
              </div>
              <p>
                {
                  restaurantMenu?.cards[0]?.card?.card?.info?.feeDetails
                    ?.message
                }
              </p>
            </div>
          </div>
          <div className="border-2 p-2 flex flex-col h-20 gap-2 rounded-md ">
            <div className=" flex gap-2 text-[#3D9B6D] font-semibold pb-2 items-center border-b-2">
              <FaStar className=" text-xl pb-0.5" />
              <p>{restaurantMenu?.cards[0]?.card?.card?.info?.avgRating}</p>
            </div>
            <p className="text-[#7E808C] text-xs font-medium">
              {restaurantMenu?.cards[0]?.card?.card?.info?.totalRatingsString}
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3 border-b-[1px] pb-4">
          <div className="flex gap-5 items-center px-3">
            <div className="flex gap-2 items-center font-bold">
              <Clock4 color="#3E4152" />
              <p>
                {restaurantMenu?.cards[0]?.card?.card?.info?.sla?.slaString}
              </p>
            </div>
            <div className="flex gap-2 items-center font-bold">
              <IndianRupee className="rounded-full w-6 text-3xl p-1 border-2 border-[#3E4152]" />
              <p>
                {restaurantMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}
              </p>
            </div>
          </div>
          <div className="flex overflow-x-scroll px-2 mt-3 cws">
            <div className="flex gap-5">
              {restaurantMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
                (data, index) => (
                  <OfferCard {...data?.info} key={index} />
                )
              )}
            </div>
          </div>
          <div className="flex p-2 items-center gap-4 px-3">
            <p className=" font-medium text-[#3D4152]">Veg Only</p>
            <div
              className={`w-9 h-[1.15rem] p-0.5 rounded-sm flex items-center cursor-pointer ${
                isVeg ? "bg-green-700" : "bg-[#b4b5b7]"
              }`}
              onClick={() => setIsVeg(!isVeg)}
            >
              <div
                className={`w-4 h-full bg-white rounded-sm flex justify-center items-center duration-500 ${
                  isVeg ? "translate-x-[98%]" : ""
                }`}
              >
                {isVeg && (
                  <div className="w-2 h-2 rounded-full bg-green-700"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          {restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards[1]?.card?.card?.title === "Top Picks" ? (
            <div>Top picks</div>
          ) : (
            "Hii"
          )}
          {console.log(
            restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1]?.card?.card?.title
          )}
          <div>
            {restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1]?.card?.card?.title === "Top Picks" && (
              <div>
                {
                  restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[1]?.card?.card?.title
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
