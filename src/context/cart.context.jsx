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

const decreaseFromCartItem = (cartItems, productRemove) => {
  const existsItem = cartItems.find(
    (cartItem) => cartItem.id === productRemove.id
  );
  if (existsItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productRemove.id);
  }
  if (existsItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};

const removeItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  decreaseCartItem: () => {},
  removeItem: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productTodd) => {
    setCartItems(addCartItem(cartItems, productTodd));
  };
  const decreaseCartItem = (productRemove) => {
    setCartItems(decreaseFromCartItem(cartItems, productRemove));
  };
  const removeItem = (productToRemove) => {
    setCartItems(removeItemFromCart(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    decreaseCartItem,
    removeItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
