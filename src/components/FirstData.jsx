import { FIRST_DATA_IMG_CDN } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

const FirstData = () => {
  const firstData = useRestaurant(0);
  return firstData.length === 0 ? <p>Loading...</p> : (
    <>
      <div className="border-b-2 flex flex-col gap-5">
        <h1 className="text-2xl font-bold">
          {firstData?.card?.card?.header?.title}
        </h1>
        <div className="flex overflow-x-scroll cws gap-8">
          {firstData?.card?.card?.imageGridCards.info.map((data) => (
            <img
              src={FIRST_DATA_IMG_CDN + data.imageId}
              key={data.id}
              className="w-36"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstData;
