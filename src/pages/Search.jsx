import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchPage = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[65%] mx-auto h-full">
        <div className="w-full flex justify-center h-32 items-center">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="w-[90%] border-gray-400 outline-none font-medium text-gray-600 border pl-4 pr-10 py-3 rounded-[4px]"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          {searchVal.length === 0 ? (
            <Search className="absolute -right-[26rem] text-gray-600" />
          ) : (
            <X className="absolute -right-[26rem] text-gray-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
