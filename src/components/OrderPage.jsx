import React, { useState } from "react";

const menu = [
  { name: "Chole Bhature", price: 60 },
  { name: "Paneer Butter Masala", price: 120 },
  { name: "Aloo Paratha", price: 30 },
  { name: "Matar Paneer", price: 80 },
  { name: "Kaju Paneer", price: 120 },
  { name: "Sahi Paneer", price: 120 },
  { name: "Chola Paneer", price: 80},
  { name: "Kaju Kari", price: 100},
  // DAL
  { name: "Dal Fry", price: 60 },
  { name: "Dal Tadka", price: 70},
  { name: "Dal Paneer", price: 70 },
  // SABJI
  { name: "Sev Masala", price: 60 },
  { name: "Sev Bhaji", price: 70 },
  { name: "Tamatar Masala", price: 60},
  { name: "Tamatar Chatni", price: 70 },
  { name: "Khadi Pakoda", price: 60 },
  { name: "Khadi Tadka", price: 70 },
  // RICE
  { name: "Plain Rice", price: 30},
  { name: "Jeera Rice", price: 40 },
  { name: "Masala Rice", price: 50 },
  { name: "Lapeta", price: 60 },
  // ROTI
  { name: "Tawa Roti", price: 6},
  { name: "Tawa Butter Roti", price: 8},
  { name: "Tandoori Roti", price: 7 },
  { name: "Tandoori Butter Roti", price: 9 },
  { name: "Lachha Paratha", price: 25 },
  // OTHER
  { name: "Papad Dry", price: 20},
  { name: "Papad Masala", price: 30},
  { name: "Bati", price: 10 },
  { name: "Dahi", price: 30},
  { name: "Water Bottle", price: 10 },
];



const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setOrderPlaced(false);
  };

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Order Your Food</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {menu.map((dish, i) => (
          <div key={i} className="bg-gray-100 p-4 shadow rounded">
            <h3 className="text-lg font-semibold">{dish.name}</h3>
            <p>₹{dish.price}</p>
            <button
              className="mt-2 bg-orange-600 text-white px-4 py-1 rounded"
              onClick={() => addToCart(dish)}
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2">Your Order</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-disc pl-6 mb-4">
          {cart.map((item, i) => (
            <li key={i}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div>
          <p className="font-semibold">Total: ₹{total}</p>
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      )}

      {orderPlaced && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded shadow">
          🎉 Your food will be delivered soon! Successfully Ordered!
        </div>
      )}
    </div>
  );
};

export default OrderPage;

