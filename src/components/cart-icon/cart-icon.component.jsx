import React, { useContext, useState } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CartIonContainer,
  ShopingCartIcon,
  ItemCount,
} from "./cart-icon.style";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggoleCartIcon = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIonContainer onClick={toggoleCartIcon}>
      <ShopingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIonContainer>
  );
};

export default CartIcon;
