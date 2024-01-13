/* eslint-disable no-unused-vars */
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import SearchCard from "../components/searchCard";

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
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [dishes, setDishes] = useState([]);

  // clearing the search
  const handleClearSearch = () => {
    setSearchVal("");
  };

  console.log(dishes.length);

  // Fetching the data based on search
  const fetchSearchData = async (e) => {
    if (searchVal.length === 0 || e.keyCode !== 13) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.5204303&lng=73.8567437&str=${searchVal}&trackingId=undefined&submitAction=ENTER&queryUniqueId=0b81e1b5-6104-65da-7582-552877416c0d `
      );

      const data = await res.json();
      setDishes(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center flex-col">
      {/* Search */}
      <div className="w-[65%] mx-auto">
        <div className="w-full flex justify-center h-32 items-center">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="w-[90%] border-gray-400 outline-none font-medium text-gray-600 border pl-4 pr-10 py-3 rounded-[4px]"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={fetchSearchData}
          />
          {searchVal.length === 0 ? (
            <Search
              className="absolute right-[22%] text-gray-600 cursor-pointer"
              onClick={fetchSearchData}
            />
          ) : (
            <X
              className="absolute right-[22%] text-gray-600 cursor-pointer"
              onClick={handleClearSearch}
            />
          )}
        </div>
      </div>
      {/* Popular Cuisins */}
      {dishes.length === 0 && (
        <div className="w-[59%] gap-2 flex flex-col mx-auto py-6">
          <h1 className="text-2xl font-bold ml-4">Popular Cuisins</h1>
          <div className="w-full flex  overflow-x-hidden">
            {popularCuisines.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl.URL}
                className="w-24 h-32 object-contain cursor-pointer"
                onClick={() => {
                  setSearchVal(imgUrl.name);
                  fetchSearchData();
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="h-[100vh] w-[59%] pl-9 px-2 py-2 gap-4 bg-[#F4F5F6] flex flex-wrap border-t-[3px] border-#EDEDEF] overflow-y-scroll">
        {loading ? (
          <h1>loading...</h1>
        ) : dishes.length === 0 ? (
          <h1 className="text-[3rem] font-bold mt-32 text-center h-[90vh] overflow-y-hidden text-[#e2e2e2] tracking-wide mx-auto">
            Search Something
          </h1>
        ) : (
          [0, 1, 3, 4, 5].map((val, idx) => <SearchCard key={idx} />)
        )}
      </div>
    </div>
  );
};

export default SearchPage;