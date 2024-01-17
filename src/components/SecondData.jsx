import useRestaurant from "../utils/useRestaurant";
import Cards from "./Cards";

const SecondData = () => {
  const secondData = useRestaurant(4);
  return (
    <>
      <div className="flex flex-col gap-6 mt-12 border-b-2 pb-10">
        <h1 className="text-2xl font-bold">
          Top Food Chains in Pune
        </h1>
        <div className="flex overflow-x-scroll cws gap-8">
          {secondData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (data) => (
              <Cards {...data?.info} width={288} key={data?.info?.id}/>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SecondData;
