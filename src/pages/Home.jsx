import useOnline from "../utils/useOnline";
import FirstData from "../components/FirstData";
import SecondData from "../components/SecondData";
import ThirdData from "../components/ThirdData";

const Home = () => {
  const isOnline = useOnline();
  if (!isOnline) return <h1>Looks like you are offline</h1>;

  return (
    <>
      <div className="px-48 mt-8">
        <FirstData />
        <SecondData />
        <ThirdData />
      </div>
    </>
  );
};

export default Home;
