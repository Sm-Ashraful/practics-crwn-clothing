import React, { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

import "./product-card.style.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartItem = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCartItem}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
