import React from "react";
import DirectoryItem from "../diretory-item/directory-item.component";
import { CategoriesContainer } from "./directory.style.jsx";

const Directory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Directory;
