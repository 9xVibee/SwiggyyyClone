import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu.jsx";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useFetchMenu(resId);

  const city = restaurantMenu?.cards[0]?.card?.card?.info?.city;
  const name = restaurantMenu?.cards[0]?.card?.card?.info?.name;

  return !restaurantMenu ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className=" px-80 py-8">
        <div className="flex gap-2 font-normal text-[9.5px] text-[#7E808C]">
          <p>Home</p>
          <p>/</p>
          <p>{city}</p>
          <p>/</p>
          <p className="text-[#5C5F6D] font-medium">{name}</p>
        </div>
        <div className="mt-10 px-2">
          <div>
            <p>{name}</p>
            <p>
              {restaurantMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </p>
          </div>
          <div>Rating</div>
        </div>
        
      </div>
    </>
  );
};

export default RestaurantMenu;


{/* <img
  src={
    IMG_CDN_URL + restaurantMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId
  }
  alt=""
/>; */}