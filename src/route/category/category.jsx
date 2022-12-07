import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {
  categoriesSelector,
  selectCategoriesIsLoading,
} from "../../store/categoeis/categories.selector";

import Spinner from "../../components/spinner/spinner.component";

import { useSelector } from "react-redux";

import { CategoryContainer, Title } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
