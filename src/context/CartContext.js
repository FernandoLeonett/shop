import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [discos, setDiscos] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);
  // const [purchasedMode, setPurchasedMode] = useState(false);
  // const [itemsPurchased, setItemsPurchased] = useState([]);

  // const removeItem = (id) => {
  //   setCartListItems(cartListItems.filter((i) => i.item.id !== id));
  //   if ((cartListItems.length = 1)) {
  //     setPurchasedMode(false);
  //   }
  // };

  // const clear = () => {
  //   setCartListItems([]);
  //   setPurchasedMode(false);
  // };

  const data = {
    loading,
    setLoading,
    discos,
    setDiscos,
    cartListItems,
    setCartListItems,
    // addItem,
    // removeItem,
    // purchasedMode,
    // setPurchasedMode,
    // itemsPurchased,
    // purchasedItem,
    // setItemsPurchased,
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
