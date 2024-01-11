import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/cart">
        <h1>Carts</h1>
      </Link>
    </>
  );
};

export default Home;
