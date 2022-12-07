import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selectior";

import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartIonContainer,
  ShopingCartIcon,
  ItemCount,
} from "./cart-icon.style";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggoleCartIcon = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIonContainer onClick={toggoleCartIcon}>
      <ShopingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIonContainer>
  );
};

export default CartIcon;
