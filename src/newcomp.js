const hey = products.map((categories) => {
  return (
    <>
      {Array(3)
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
