import React, { useState } from "react";
import Head from "./Components/Header/Head";
import FoodList from "./Components/FoodList/FoodList";
import Cart from "./Components/Cart/Cart";
const App = () => {
  const [ShowCart, SetShowCart] = useState(false);
  const ShowCartHandler = () => {
    SetShowCart(true);
  }
  const OffCartHandler = () => {
    SetShowCart(false);
  }
  const OrderFunction = () => {
    alert("Go To Payment Method Section!");
  }
  return (
    <>
    {ShowCart && <Cart OnOffCart={OffCartHandler} OnOrder={OrderFunction} />}
      <Head OnShowCart = {ShowCartHandler} />
      <FoodList />
    </>
  );
}
export default App;