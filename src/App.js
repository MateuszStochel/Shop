import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import SnackbarProvider from "react-simple-snackbar";
import { useStateValue } from "./App/StateProvider";
import { auth } from "./firebase";

import Checkout from "./domain/Checkout/Pages/Checkout";
import Item from "./domain/Shop/Pages/ItemDetails";
import Home from "./domain/Home/Pages/Home";
import Shop from "./domain/Shop/Pages/Shop";
import Footer from "./App/Footer";
import Toolbar from "./Toolbar/Toolbar";
import Payment from "./Payment";
import Login from "./Login";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import ScrollToTop from "./App/Router/ScrollToTop";

function App() {
  const [, dispatch] = useStateValue();
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      dispatch({
        type: "SET_USER",
        user: authUser || null,
      });
    });
  }, [dispatch]);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <Router>
      <SnackbarProvider>
        <div className="App">
          <Toolbar drawerClickHandler={drawerToggleClickHandler} />

          <SideDrawer
            show={sideDrawerOpen}
            onShow={setSideDrawerOpen}
            className={sideDrawerOpen ? "side__drawer open" : "side__drawer"}
          />
          {backdrop}
          <ScrollToTop />
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
            </Route>
          </Switch>
        </div>
        <Footer />
      </SnackbarProvider>
    </Router>
  );
}

export default App;
