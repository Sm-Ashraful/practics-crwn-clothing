import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decreaseCartItem,
  removeItem,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selectior.js";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Img,
  Value,
  RemoveButton,
  Quantity,
  Arrow,
} from "./checkout-item.style.jsx";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addCartItem = () => dispatch(addItemToCart(cartItems, item));
  const decreaseFromCart = () => dispatch(decreaseCartItem(cartItems, item));
  const removeFromCart = () => dispatch(removeItem(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decreaseFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addCartItem}>&#10095;</Arrow>
      </Quantity>
      <Name>{price}</Name>
      <RemoveButton onClick={removeFromCart}>&#10006;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
