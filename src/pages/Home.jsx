import { Link } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div>Home</div>
      <Link to="/cart">
        <h1>Carts</h1>
      </Link>
    </>
  );
};

export default Home;
