import useRestaurant from "../utils/useRestaurant";
import Cards from "./Cards";

const ThirdData = () => {
  const thirdData = useRestaurant(1);
  return (
    <>
      <div className="flex flex-col gap-6 mt-12 pb-12 border-b-2">
        <h1 className="text-2xl font-bold">
          Restaurants with online food delivery in Pune
        </h1>
        <div className="flex flex-wrap cws gap-8">
          {thirdData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (data) => (
              <Cards {...data?.info} width={256} key={data?.info?.id}/>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ThirdData;
