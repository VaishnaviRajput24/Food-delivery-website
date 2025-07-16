
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";
import OrderPage from "./components/OrderPage";
import RegisterPage from "./components/RegisterPage";
import MenuCardPage from "./components/MenuCardPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">Mamta Bhojnalaya</h1>
        <div className="space-x-4">
          <NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink>
          <NavLink to="/menu" className="text-gray-700 hover:text-green-600">Menu</NavLink>
          <NavLink to="/order" className="text-gray-700 hover:text-green-600">Order</NavLink>
          <NavLink to="/register" className="text-gray-700 hover:text-green-600">Register</NavLink>
          <NavLink to="/menucard" className="text-gray-700 hover:text-green-600">Menu Card</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/order" element={<OrderPage cartItems={cartItems} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menucard" element={<MenuCardPage />} />
      </Routes>
    </>
  );
};

export default App;
