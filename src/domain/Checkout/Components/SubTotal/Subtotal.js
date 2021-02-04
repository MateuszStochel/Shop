import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

import { getBasketTotal } from "../../../../App/reducer";
import { useStateValue } from "../../../../App/StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length}):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Procees to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
