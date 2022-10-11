import React, { useContext } from "react";

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

import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addItemToCart, decreaseCartItem, removeItem } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => decreaseCartItem(item)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemToCart(item)}>&#10095;</Arrow>
      </Quantity>
      <Name>{price}</Name>
      <RemoveButton onClick={() => removeItem(item)}>&#10006;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
