/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const useUserDetails = create((set) => ({
  fullname: "",
  email: "",
  itemsInCart: [],
  restaurantName: "",
  addToCart: (item) => {
    set((state) => {
      // checking if item already present in array or not
      // if present -> then increasing the quantity and return the array
      const isPresent = state.itemsInCart.find((val) => val[0] == item[0]);
      if (isPresent) {
        isPresent.quantity++;
        return {
          itemsInCart: state.itemsInCart,
        };
      }
      // else return array by adding new item in it
      return {
        restaurantName: item[0],
        itemsInCart: [...state.itemsInCart, item],
      };
    });
  },
  startFresh: (item) =>
    set(() => {
      return {
        restaurantName: item.name,
        itemsInCart: [item],
      };
    }),
}));
