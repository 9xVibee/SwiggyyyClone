import useOnline from "../../utils/useOnline";

const Home = () => {

  const isOnline = useOnline();

  return (!isOnline) ? <div>You are offline</div> : (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;