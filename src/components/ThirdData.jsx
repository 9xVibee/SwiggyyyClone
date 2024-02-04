/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurant";
import Cards from "./Cards";
import { RectangleSkeleton } from "./SkeletonLoader";

const ThirdData = ({ title, Skeleton }) => {
  const thirdData = useRestaurant(1);

  return thirdData?.length === 0 ? (
    <Skeleton />
  ) : (
    <>
      <div className="flex flex-col gap-6 mt-12 pb-12">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex flex-wrap max-lg:px-2 justify-center md:justify-between cws gap-8">
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
