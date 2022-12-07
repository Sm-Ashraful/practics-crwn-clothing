import { ActionReducer } from "../../utils/Reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cart.type";

const addCartItem = (cartItems, productTodd) => {
  const existsItem = cartItems.find(
    (cartItem) => cartItem.id === productTodd.id
  );
  if (existsItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productTodd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
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

export const setIsCartOpen = (bool) =>
  ActionReducer(CART_ACTION_TYPE.SET_CART_OPEN, bool);

export const addItemToCart = (cartItems, productTodd) => {
  const newCartItems = addCartItem(cartItems, productTodd);
  return ActionReducer(CART_ACTION_TYPE.SET_ITEM_TO_CART, newCartItems);
};
export const decreaseCartItem = (cartItems, productRemove) => {
  const newCartItems = decreaseFromCartItem(cartItems, productRemove);
  return ActionReducer(CART_ACTION_TYPE.SET_ITEM_TO_CART, newCartItems);
};
export const removeItem = (cartItems, productToRemove) => {
  const newCartItems = removeItemFromCart(cartItems, productToRemove);
  return ActionReducer(CART_ACTION_TYPE.SET_ITEM_TO_CART, newCartItems);
};
