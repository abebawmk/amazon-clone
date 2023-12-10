import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders";

const promise = loadStripe(
  "pk_test_51O4fSQBo7wKko8viRGnQcA8KowuO7zczU28PvT4XcSy7nHi5JdBNdLofYyQICQdj0wkjKotATRHPgYzlyze4a37z006p380RcZ"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    console.log("useEffect function is running");
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        console.log("user not found");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      console.log(`auth ${authUser}`);
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route
            path="/Payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
