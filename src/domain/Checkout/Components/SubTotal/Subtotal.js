import React from "react";
import CurrencyFormat from "react-currency-format";

import { getBasketTotal } from "../../../../App/reducer";
import { useStateValue } from "../../../../App/StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Produkty: {Object.values(basket).length}</p>
            <p>
              Cena laczna:<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Zamowienie zawiera prezent
            </small>
          </>
        )}
        value={getBasketTotal(Object.values(basket))}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Procees to Checkout</button>
    </div>
  );
}

export default Subtotal;
