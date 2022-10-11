import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryIemContainer,
} from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryIemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h1>{title}</h1>
        <p>Shop Now</p>
      </Body>
    </DirectoryIemContainer>
  );
};

export default DirectoryItem;
