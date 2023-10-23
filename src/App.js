import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import FoodDeliveryApp from "./components/TitanEats/TitanEats";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/titan-eats" element ={<TitanEats />} />
      </Routes>
    </Router>
  );
}

export default App;
