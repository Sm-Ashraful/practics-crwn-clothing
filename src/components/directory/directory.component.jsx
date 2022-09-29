import React from "react";
import Card from "../card/card.component";

import "./directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Card key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
