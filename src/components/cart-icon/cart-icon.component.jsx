import React, { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingCart } from "../../assets/111 shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggoleCartIcon = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggoleCartIcon}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
