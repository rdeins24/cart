import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Bag from "./Bag";
import ShoppingCart from "./ShoppingCart";
import Hello from "./Hello";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const url = "https://gunter-food-api.herokuapp.com/pizza";

function App() {
  const [pizza, setPizza] = useState([]);
  let [bagList, setBagList] = useState([]);
  let [cartValue, setCartValue] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(url);
    const pizza = await resp.json();
    setPizza(pizza);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const moveToBag = (id) => {
    let list = pizza.filter((item) => item.id === id);
    let newList = [...list, ...bagList];
    console.log(`shopping cart lenth ${newList.length}`);
    setBagList(newList);
    cartValue = newList.length;
    setCartValue(cartValue);
  };

  return (
    <>
  
      <div className="container">
        <Router>
          <ShoppingCart moveToBag={moveToBag} cartValue={cartValue} />
          <Routes>
            <Route
              element={
                <ShoppingCart moveToBag={moveToBag} cartValue={cartValue} />
              }
            />

            <Route
              path="/bag"
              element={
                <Bag moveToBag={moveToBag} bagList={bagList} pizza={pizza} />
              }
            />
            <Route
              path="/"
              element={<Pizza pizza={pizza} moveToBag={moveToBag} />}
            />
          </Routes>
        </Router>
      </div>
   
    </>
 
  );
}

export default App;
