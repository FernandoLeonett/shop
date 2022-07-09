import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCartList = () => {
  const { cartListItems, setCartListItems } = useContext(CartContext);

  const isEmpty = cartListItems.length === 0;

  const containElement = (element) =>
    cartListItems.some(({ item: { id } }) => element === id);
  const addItem = (disc, quantity) => {
    const isInCart = containElement(disc.id);

    if (!isInCart) {
      const newItem = { item: disc, quantity: quantity };
      setCartListItems((oldState) => [...oldState, newItem]);
    }
    return isInCart;
  };

  const totalItem = (idRow) =>
    cartListItems
      .filter(({ item: { id } }) => id === idRow)
      .reduce(
        (total, { quantity, item: { precio } }) => total + quantity * precio,
        0
      );

  const totalPrice = cartListItems.reduce(
    (sum, { item: { id } }) => sum + totalItem(id),
    0
  );

  const removeItem = (deleteId) => {
    const newList = cartListItems.filter(({ item: { id } }) => id !== deleteId);
    setCartListItems(newList);
  };
  const clear = () => setCartListItems([]);

  return {
    cartListItems,
    setCartListItems,
    totalPrice,
    totalItem,
    removeItem,
    clear,
    addItem,
    isEmpty,
    containElement,
  };
};

export default useCartList;
