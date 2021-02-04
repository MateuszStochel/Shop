import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../App/StateProvider";
import { useHistory } from "react-router-dom";

import { parse } from "query-string";

import Product from "../Components/Products/Product";
import Filter from "../Components/Filters/Filter.js";

import "../Components/Shop.css";

const categoryField = [
  "Koszulki",
  "Bluzy",
  "Garnitury",
  "Bluzki",
  "Spodnie",
  "Sukienki",
];

const koszulki = "Koszulki";
const bluzy = "Bluzy";
const garnitury = "Garnitury";
const bluzki = "Bluzki";
const spodnie = "Spodnie";
const sukienki = "Sukienki";
const wszystkie = "Wszystkie";

const filterProductsByCategory = (products, selectedCategory) => {
  return products[0][selectedCategory];
};

const filterProducts = (products, selectedCategory) => {
  switch (selectedCategory) {
    case koszulki:
      return filterProductsByCategory(products, selectedCategory);
    case bluzy:
      return filterProductsByCategory(products, selectedCategory);
    case garnitury:
      return filterProductsByCategory(products, selectedCategory);
    case bluzki:
      return filterProductsByCategory(products, selectedCategory);
    case spodnie:
      return filterProductsByCategory(products, selectedCategory);
    case sukienki:
      return filterProductsByCategory(products, selectedCategory);
    default:
      return products;
  }
};

function Shop(props) {
  const [{ basket, user, products }, dispatch] = useStateValue();
  let history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState(wszystkie);
  const filteredProducts = filterProducts(products, selectedCategory);
  const getQueryParams = parse(props.location.search).kategorie;

  useEffect(() => {
    if (!props.location.search || !getQueryParams) {
      return history.push(`/shop?kategorie=${selectedCategory}`);
    }

    setSelectedCategory(parse(props.location.search).kategorie);
  }, [props.location.search, selectedCategory, history]);

  const renderFilteredProducts = () => {
    return filteredProducts.map((product) => {
      return (
        <>
          <Product
            category={selectedCategory}
            title={product.title}
            price={product.price}
            id={product.id}
            image={product.image}
          />
        </>
      );
    });
  };

  const hey = products.map((categories) => {
    return (
      <>
        {Array(6)
          .fill()
          .map((_, i) => {
            return (
              <>
                <h2 className="shop__row__title">{categoryField[i]}</h2>
                <div className="shop__row">
                  {categories[categoryField[i]].map((product) => (
                    <Product
                      category={categoryField[i]}
                      title={product.title}
                      price={product.price}
                      id={product.id}
                      rating={product.rating}
                      image={product.image}
                    />
                  ))}
                </div>
              </>
            );
          })}
      </>
    );
  });

  return (
    <div className="shop">
      <Filter />
      {selectedCategory === wszystkie && hey}
      {selectedCategory !== wszystkie && (
        <>
          <h2 className="shop__row__title">{selectedCategory}</h2>
          <div className="shop__row">{renderFilteredProducts()}</div>
        </>
      )}
    </div>
  );
}

export default Shop;
