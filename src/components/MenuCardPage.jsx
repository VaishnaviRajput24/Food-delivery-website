
import React from "react";
import menuCard from "../assets/menu-card.jpg";

const MenuCardPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-800">Menu Card</h2>
      <img
        src={menuCard}
        alt="Mamta Bhojnalaya Menu"
        className="mx-auto rounded shadow-md w-full max-w-md"
      />
      <div className="text-center mt-6">
        <a
          href={menuCard}
          download="mamta-menu.jpg"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Download Menu
        </a>
      </div>
    </div>
  );
};

export default MenuCardPage;
