import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Checkout from "../Pages/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/home" />} />
      <Route path="/home" exact element={<Home />} /> 
      <Route path="/Foods" exact element={<AllFoods />}  />
      <Route path="/checkout/:Subtotal" exact element={<Checkout />}  />

    </Routes>
  );
};

export default Routers;