import React from "react";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
const categoryField = [
  "Koszulki",
  "Bluzy",
  "Garnitury",
  "Bluzki",
  "Spodnie",
  "Sukienki",
];
function Shop() {
  const [{ basket, user, products }, dispatch] = useStateValue();
  const hey = products.map((categories) => {
    return (
      <>
        {Array(6)
          .fill()
          .map((_, i) => {
            return (
              <>
                <h2 className="home__row__title">{categoryField[i]}</h2>
                <div className="home__row">
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

  return <div>{hey}</div>;
}

export default Shop;
