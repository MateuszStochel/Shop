import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth } from "./firebase";
import { useStateValue } from "./App/StateProvider";

import Home from "./domain/Home/Pages/Home";
import Header from "./App/Header";
import Checkout from "./domain/Checkout/Pages/Checkout";
import Login from "./Login";
import Item from "./domain/Shop/Pages/ItemDetails";
import Shop from "./domain/Shop/Pages/Shop";
import Footer from "./App/Footer";
import Payment from "./Payment";

import "./App.css";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      dispatch({
        type: "SET_USER",
        user: authUser || null,
      });
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop" render={(props) => <Shop {...props} />} />
          <Route path="/product/:category/:id">
            <Item />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
