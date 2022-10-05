import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productTodd) => {
  const existsItem = cartItems.find(
    (cartItem) => cartItem.id === productTodd.id
  );
  if (existsItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productTodd.id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem
    );
  }

  return [...cartItems, { ...productTodd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productTodd) => {
    setCartItems(addCartItem(cartItems, productTodd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
