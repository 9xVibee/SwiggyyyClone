import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";

const useFetchMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL(resId));
    const json = await data.json();
    setRestaurantMenu(json?.data);
    console.log(json.data);
  }
  return restaurantMenu;
};

export default useFetchMenu;
