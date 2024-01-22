/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const useUserDetails = create((set) => ({
  fullname: "",
  email: "",
  itemsInCart: [],
  restaurantName: "",
  addToCart: (item) => {
    console.log(item);
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
      console.log(item);
      return {
        restaurantName: item.name,
        itemsInCart: [
          {
            0: item.name,
            1: item.imgId,
            2: item.dishName,
            3: item.price,
            4: item.resId,
            quantity: 1,
          },
        ],
      };
    }),
  removeItemFromCart: (item) =>
    set((state) => {
      let valItem = state.itemsInCart.find((val) => val[0] == item);
      // if quantity = 1 then removing the item from the cart
      if (valItem.quantity == 1) {
        state.itemsInCart.forEach((val, idx) => {
          if (val[0] == item) {
            state.itemsInCart.splice(idx, 1);
          }
        });
        return {
          itemsInCart: state.itemsInCart,
        };
        // else -1 the quantity
      } else {
        valItem.quantity--;
        return {
          itemsInCart: state.itemsInCart,
        };
      }
    }),
}));
