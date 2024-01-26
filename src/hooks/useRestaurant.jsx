import { useState, useEffect } from "react";
import { RES_DATA_URL } from "../utils/constants";

const useRestaurant = (index) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(RES_DATA_URL);
    const json = await data.json();
    setRestaurantData(json?.data?.cards[index]);
  }
  return restaurantData;
};

export default useRestaurant;
