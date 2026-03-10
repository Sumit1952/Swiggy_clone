import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Restaurant } from "./Components/Restaurant";
import { Home } from "./Components/Home";
import { BrowserRouter, Router, Routes ,Route } from "react-router";
import { RestaurantMenu } from "./Components/RestaurantMenu";
import { SearchFood } from "./Components/SearchFood";
import { SecondaryHome } from "./Components/SecondaryHome";
import { store } from "./Stored/Stores";
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout";


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path ="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path = "/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path = "/city/delhi/:id/search" element ={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path = "/Checkout" element ={<Checkout></Checkout>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
