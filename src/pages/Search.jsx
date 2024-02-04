/* eslint-disable no-unused-vars */
import { Search, X } from "lucide-react";
import { useRef, useState } from "react";
import SearchCard from "../components/searchCard";
import toast from "react-hot-toast";
import { useUserDetails } from "../utils/store";
import { SearchDetailsSkeleton } from "../components/SkeletonLoader";
import useAddToCart from "../hooks/useAddToCart";

const popularCuisines = [
  {
    name: "biryani",
    URL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65",
  },
  {
    name: "pizzas",
    URL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f",
  },
  {
    name: "rolls",
    URL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966",
  },
  {
    name: "burger",
    URL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387",
  },
  {
    name: "tea",
    URL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27",
  },
];

const SearchPage = () => {
  const inputRef = useRef(null);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState({});

  const { startFresh } = useUserDetails();

  // clearing the search
  const handleClearSearch = () => {
    setSearchVal("");
    dishes.length = 0;
  };

  // handling add to cart
  const { handleAddToCart, isResetOpen, setIsResetOpen } = useAddToCart();

  // Fetching the data based on search
  const fetchSearchData = async (e, isClickedToCuisines, dishName) => {
    if ((searchVal.length === 0 || e.keyCode !== 13) && !isClickedToCuisines)
      return;

    setLoading(true);
    try {
      dishes.length = 0;
      const res = await fetch(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fv3%3Flat%3D18.5204303%26lng%3D73.8567437%26str%3D${
          isClickedToCuisines ? dishName : searchVal
        }%26trackingId%3Dundefined%26submitAction%3DSUGGESTION%26queryUniqueId%3Dc15f88c1-4a8b-c287-9671-c07f2634f11d%26metaData%3D%257B%2522type%2522%253A%2522DISH%2522%252C%2522data%2522%253A%257B%2522vegIdentifier%2522%253A%2522NA%2522%252C%2522cloudinaryId%2522%253A%2522ocrnq6kwvvrl2ouea492%2522%252C%2522dishFamilyId%2522%253A%2522846613%2522%252C%2522dishFamilyIds%2522%253A%255B%2522846613%2522%255D%257D%252C%2522businessCategory%2522%253A%2522SWIGGY_FOOD%2522%252C%2522displayLabel%2522%253A%2522Dish%2522%257D`
      );

      const data = await res.json();

      if (data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards) {
        setDishes(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
      } else
        toast.error(
          `Sorry we don't have any ${searchVal} availabel right now😢`,
          {
            duration: 5000,
          }
        );
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  // handling fresh start
  const handleFreshStart = () => {
    startFresh(recentlyAdded);
    setIsResetOpen(false);
  };

  return (
    <>
      <div
        className="w-full h-full flex items-center flex-col"
        onClick={() => {
          if (isResetOpen) setIsResetOpen(false);
        }}
      >
        {/* Search */}
        <div className="w-[90%] md:w-[65%] mx-auto">
          <div className="w-full flex justify-center h-32 items-center">
            <input
              type="text"
              placeholder="Search for restaurants and food"
              className="w-full border-gray-400 outline-none font-medium text-gray-600 border pl-4 pr-10 py-3 rounded-[4px]"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={fetchSearchData}
              ref={inputRef}
            />
            {searchVal.length === 0 ? (
              <Search
                className="absolute right-[8%] md:right-[18%] text-gray-600 cursor-pointer"
                onClick={fetchSearchData}
              />
            ) : (
              <X
                className="absolute right-[8%] md:right-[18%] text-gray-600 cursor-pointer"
                onClick={handleClearSearch}
              />
            )}
          </div>
        </div>
        {/* Popular Cuisins */}
        {searchVal.length === 0 && (
          <div className="w-[90%] md:w-[65%] gap-2 flex flex-col mx-auto py-6">
            <h1 className="text-2xl font-bold ml-4">Popular Cuisines</h1>
            <div className="w-full flex  overflow-x-scroll cws">
              {popularCuisines.map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl.URL}
                  className="w-24 h-32 object-contain cursor-pointer"
                  onClick={(e) => {
                    inputRef.current.focus();
                    setSearchVal(imgUrl.name);
                    fetchSearchData(e, true, imgUrl.name);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Showing result */}
        <div className="h-[100vh]  w-[90%] md:w-[80%] xl:w-[65%] px-4 lg:px-0 py-6 gap-4 bg-[#F4F5F6] flex flex-wrap justify-center border-t-[3px] border-#EDEDEF] overflow-y-scroll cws">
          {loading ? (
            <SearchDetailsSkeleton />
          ) : dishes.length === 0 ? (
            <h1 className="text-5xl sm:text-[3rem] font-bold mt-32 text-center h-[90vh] overflow-y-hidden text-[#e2e2e2] tracking-wide mx-auto">
              Search Something
            </h1>
          ) : (
            dishes.map((val, idx) => {
              if (idx > 0)
                return (
                  <SearchCard
                    key={idx}
                    name={val?.card?.card?.restaurant?.info?.name}
                    resId={val?.card?.card?.restaurant?.info?.id}
                    imgId={val?.card?.card?.info?.imageId}
                    dishName={val?.card?.card?.info?.name}
                    price={val?.card?.card?.info?.price}
                    handleAddToCart={handleAddToCart}
                    setRecentlyAdded={setRecentlyAdded}
                  />
                );
            })
          )}
        </div>
      </div>

      {/* Reset Box */}
      <div
        className={`fixed w-[25rem] left-[2.5%] sm:left-[35%] bottom-5 sm:w-[32rem] h-[12rem] bg-white shadow-2xl flex flex-col justify-center items-start px-8 gap-2 transition-all duration-300 ${
          isResetOpen ? "opacity-1 translate-y-0" : "opacity-0 translate-y-72"
        }`}
      >
        <h1 className="text-xl font-bold">Items already in cart</h1>
        <p className="text-[0.8rem] mb-4">
          Your cart contains items from other restaurant. Would you like to
          reset your cart for adding items from this restaurant?
        </p>
        <div className="flex gap-4">
          <button
            className="uppercase w-[10rem] sm:w-[13rem] border-[#60B246] border-2 py-2 hover:shadow-lg transition-all duration-300"
            onClick={() => setIsResetOpen(false)}
          >
            No
          </button>
          <button
            className="uppercase w-[10rem] sm:w-[13rem] border-2 border-[#60B246] bg-[#60B246] text-white hover:shadow-lg transition-all duration-300"
            onClick={handleFreshStart}
          >
            Yes, Start Afresh
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
