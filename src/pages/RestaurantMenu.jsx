import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu.jsx";
import { MENU_PAGE_ICONS } from "../utils/constants";
import { FaStar } from "react-icons/fa6";
import { Clock4, IndianRupee } from "lucide-react";
import OfferCard from "../components/OfferCard.jsx";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useFetchMenu(resId);

  const city = restaurantMenu?.cards[0]?.card?.card?.info?.city;
  const name = restaurantMenu?.cards[0]?.card?.card?.info?.name;

  return !restaurantMenu ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className=" px-[22rem] py-8">
        <div className="flex gap-2 font-normal text-[9.5px] text-[#7E808C]">
          <p>Home</p>
          <p>/</p>
          <p>{city}</p>
          <p>/</p>
          <p className="text-[#5C5F6D] font-medium">{name}</p>
        </div>
        <div className="mt-10 px-3 flex items-top justify-between border-b-2 pb-6">
          <div>
            <p className="text-xl font-bold mb-1.5">{name}</p>
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
        <div className="mt-5 flex flex-col gap-6 border-b-2 pb-6">
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
          <div className="flex overflow-x-scroll px-2 cws">
            <div className="flex gap-5">
              {restaurantMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
                (data, index) => (
                  <OfferCard {...data?.info} key={index} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
