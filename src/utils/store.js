/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const useUserDetails = create((set) => ({
  user:
    sessionStorage.getItem("user") !== null
      ? JSON.parse(sessionStorage.getItem("user"))
      : {
          name: "",
          email: "",
          password: "",
        },
  itemsInCart:
    sessionStorage.getItem("items") !== null
      ? JSON.parse(sessionStorage.getItem("items"))
      : [],
  restaurantName:
    sessionStorage.getItem("resName") !== undefined
      ? JSON.parse(sessionStorage.getItem("resName"))
      : "",
  addToCart: (item) => {
    set((state) => {
      // checking if item already present in array or not
      // if present -> then increasing the quantity and return the array
      const isPresent = state.itemsInCart.find((val) => val[0] == item[0]);
      sessionStorage.removeItem("items");
      if (isPresent) {
        isPresent.quantity++;
        sessionStorage.setItem("items", JSON.stringify([...state.itemsInCart]));
        return {
          itemsInCart: state.itemsInCart,
        };
      }
      // else return array by adding new item in it
      sessionStorage.setItem(
        "items",
        JSON.stringify([...state.itemsInCart, item])
      );
      sessionStorage.removeItem("resName");
      sessionStorage.setItem("resName", JSON.stringify(item[0]));
      return {
        restaurantName: item[0],
        itemsInCart: [...state.itemsInCart, item],
      };
    });
  },
  startFresh: (item) =>
    set(() => {
      sessionStorage.removeItem("items");
      sessionStorage.removeItem("resName");
      sessionStorage.setItem(
        "items",
        JSON.stringify([
          {
            0: item.name,
            1: item.imgId,
            2: item.dishName,
            3: item.price,
            4: item.resId,
            quantity: 1,
          },
        ])
      );
      sessionStorage.setItem("resName", JSON.stringify(item.name));
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
      sessionStorage.removeItem("items");
      if (valItem.quantity == 1) {
        state.itemsInCart.forEach((val, idx) => {
          if (val[0] == item) {
            state.itemsInCart.splice(idx, 1);
          }
        });
        sessionStorage.setItem("items", state.itemsInCart);
        return {
          itemsInCart: state.itemsInCart,
        };
        // else -1 the quantity
      } else {
        valItem.quantity--;
        sessionStorage.setItem("items", JSON.stringify([...state.itemsInCart]));
        return {
          itemsInCart: state.itemsInCart,
        };
      }
    }),
  addUserDetails: (data) => {
    set(() => {
      return {
        user: data,
      };
    });
  },
}));
