import React, { useState, useEffect, useMemo } from "react";
import { useStateValue } from "../../../App/StateProvider";
import { useHistory } from "react-router-dom";
import uniqid from "uniqid";
import { parse } from "query-string";

import Product from "../Components/Products/Product";
import Filter from "../Components/Filters/Filter.js";

import "../Components/Shop.css";
import { CategoryRoute } from "../../../App/Router/CategoryRoot";

const filterProductsByCategory = (products, selectedCategory) => {
  return products[0][selectedCategory];
};

const AllProductsView = ({ products }) =>
  Object.entries(products[0]).map((prod) => (
    <div key={uniqid}>
      <h2 className="shop__row__title">{prod[0]}</h2>
      <div className="shop__row">
        {prod[1].map((product) => (
          <Product
            category={prod[0]}
            title={product.title}
            price={product.price}
            id={product.id}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  ));

const FilteredProductsView = ({ filteredProducts, selectedCategory }) => {
  return (
    <>
      <h2 className="shop__row__title">{selectedCategory}</h2>
      <div className="shop__row">
        {filteredProducts.map((product) => {
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
        })}
      </div>
    </>
  );
};

function Shop(props) {
  const [{ products }] = useStateValue();
  let history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const filteredProducts = filterProductsByCategory(products, selectedCategory);
  const getQueryParams = parse(props.location.search).kategorie;

  useEffect(() => {
    if (!getQueryParams) {
      history.push(`/shop?kategorie=${selectedCategory}`);
    }
    setSelectedCategory(parse(props.location.search).kategorie);
  }, [props.location.search, getQueryParams, history, selectedCategory]);

  const AllProducts = useMemo(() => {
    return () => <AllProductsView products={products} />;
  }, [products]);

  const FilteredProducts = useMemo(() => {
    return () => (
      <FilteredProductsView
        selectedCategory={selectedCategory}
        filteredProducts={filteredProducts}
      />
    );
  }, [selectedCategory, filteredProducts]);

  const ProductsList = useMemo(() => {
    return () => {
      switch (selectedCategory) {
        case CategoryRoute.SUKIENKI:
        case CategoryRoute.GARNITURY:
        case CategoryRoute.BLUZKI:
        case CategoryRoute.KOSZULKI:
        case CategoryRoute.SPODNIE:
        case CategoryRoute.BLUZY:
          return <FilteredProducts />;
        default:
          return <AllProducts />;
      }
    };
  }, [selectedCategory]);

  return (
    <div className="shop">
      <Filter selectedCategory={selectedCategory} />
      <ProductsList />
    </div>
  );
}

export default Shop;
