
import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });// RegisterPage.jsx

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can store this info in localStorage or use it globally
    alert("Registration Successful!");
    console.log("User Info:", formData);
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 border rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Delivery Address"
          required
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
