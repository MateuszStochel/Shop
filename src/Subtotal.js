import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const map = basket
    .map((bas) => bas.price)
    .reduce(function (prevValue, nextValue) {
      return prevValue + nextValue;
    }, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length}):
              <strong>{map}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Procees to Checkout</button>
    </div>
  );
}

export default Subtotal;
