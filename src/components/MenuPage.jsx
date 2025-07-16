
import React, { useState } from "react";
import menuCard from "../assets/menu-card.jpg"; 


const allDishes = [
  { name: "Chole Bhature", price: 60, category: "Main Course" },
  { name: "Paneer Butter Masala", price: 100, category: "Main Course" },
  { name: "Rajma Chawal", price: 80, category: "Main Course" },
  { name: "Aloo Puri", price: 50, category: "Main Course" },
  { name: "Kadhi Chawal", price: 70, category: "Main Course" },
  { name: "Mix Veg", price: 90, category: "Main Course" },
  { name: "Chapati", price: 10, category: "Bread" },
  { name: "Naan", price: 20, category: "Bread" },
  { name: "Plain Rice", price: 40, category: "Rice" },
  { name: "Curd", price: 20, category: "Extras" },
  { name: "Lassi", price: 30, category: "Drinks" },
  { name: "Butter Milk", price: 25, category: "Drinks" },
  { name: "Samosa", price: 15, category: "Snacks" },
  { name: "Pakora", price: 25, category: "Snacks" },
  { name: "Gulab Jamun", price: 20, category: "Desserts" },
  { name: "Rasgulla", price: 20, category: "Desserts" }
];

const MenuPage = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (dish) => {
    setCartItems((prev) => [...prev, dish]);
  };

  const filteredDishes = allDishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>

      <input
        type="text"
        placeholder="Search for a dish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full rounded mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDishes.map((dish, idx) => (
          <div key={idx} className="border rounded shadow p-4 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">{dish.name}</h2>
            <p className="text-gray-700 mb-2">₹{dish.price}</p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => handleAddToCart(dish)}
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Full Menu Card</h2>
      <img
        src={menuCard}
        alt="Menu Card"
        className="w-full max-w-2xl mx-auto rounded shadow"
      />
    </div>
  );
};

export default MenuPage;
