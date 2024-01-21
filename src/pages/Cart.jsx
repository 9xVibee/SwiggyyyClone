import { Link } from "react-router-dom";
import { useUserDetails } from "../utils/store";

const Cart = () => {
  const { restaurantName } = useUserDetails();
  return (
    <>
      <div className="w-full h-[100vh] bg-[#E9ECEE] flex justify-center items-center gap-8">
        {/* left section */}
        <div className="w-[55%] h-[40%] bg-white shadow-lg"></div>
        {/* right section */}
        <div className="w-[23%] h-[90%] bg-white shadow-xl relative overflow-hidden">
          <Link to={"/restaurant/123"} className="sticky">
            <div className="w-full h-[5rem] shadow-md flex justify-center items-center px-8 gap-2">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/6067b9c8fcab00e28e4423a4c4cbeaf6"
                alt=""
                className="w-[3rem] h-[3rem]"
              />
              <div className="w-full flex flex-col">
                <h1 className="font-semibold">{restaurantName}</h1>
                <p className="-mt-1 text-[0.8rem]">Camp</p>
              </div>
            </div>
          </Link>
          <div className="w-full h-full overflow-y-scroll cws px-6 py-4"></div>
          <div className="w-full h-[3.2rem] shadow-inner flex justify-between items-center px-8 gap-2 bg-white sticky bottom-0 ">
            <p className="font-semibold">TO PAY</p>
            <p className="font-semibold">$551</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
