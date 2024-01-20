import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Cards from "./Cards";
import { RectangleSkeleton } from "./SkeletonLoader";

const ThirdData = () => {
  const thirdData = useRestaurant(1);

  return thirdData.length === 0 ? (
    <RectangleSkeleton />
  ) : (
    <>
      <div className="flex flex-col gap-6 mt-12 pb-12">
        <h1 className="text-2xl font-bold">
          Restaurants with online food delivery in Pune
        </h1>
        <div className="flex flex-wrap cws gap-8">
          {thirdData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (data) => (
              <Link to={`/restaurant/${data?.info?.id}`} key={data?.info?.id}>
                <Cards {...data?.info} width={256} />
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ThirdData;
