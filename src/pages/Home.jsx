import FirstData from "../components/FirstData";
import SecondData from "../components/SecondData";
import { RectangleSkeleton } from "../components/SkeletonLoader";
import ThirdData from "../components/ThirdData";
import useOnline from "../hooks/useOnline";

const Home = () => {
  const isOnline = useOnline();
  if (!isOnline) return <h1>Looks like you are offline</h1>;

  return (
    <>
      <div className="px-6 sm:px-16 lg:px-24 xl:px-48 mt-8">
        <FirstData />
        <SecondData />
        <ThirdData
          title={"Restaurants with online food delivery in Pune"}
          Skeleton={RectangleSkeleton}
        />
      </div>
    </>
  );
};

export default Home;
