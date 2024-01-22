import { useState } from "react";
import { useUserDetails } from "../utils/store";
import toast from "react-hot-toast";

const useAddToCart = () => {
  const { addToCart, itemsInCart, restaurantName } = useUserDetails();
  const [isResetOpen, setIsResetOpen] = useState(false);

  const handleAddToCart = (...cardDetails) => {
    if (itemsInCart.length > 0 && restaurantName !== cardDetails[0]) {
      setIsResetOpen(true);
      return;
    }

    addToCart({ ...cardDetails, quantity: 1 });
    toast.success(
      cardDetails[0] ? `${cardDetails[0]} Added to cart 😊` : "Added to cart",
      {
        duration: 2000,
      }
    );
  };

  return { handleAddToCart, isResetOpen, setIsResetOpen };
};
export default useAddToCart;
