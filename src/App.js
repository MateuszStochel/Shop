import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import Item from "./Item";
import Shop from "./Shop";
import Footer from "./Footer";

import "./App.css";
import { useStateValue } from "./StateProvider";

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
