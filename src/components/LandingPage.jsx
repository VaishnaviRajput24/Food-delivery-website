import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1692776206795-60a58a4dc817?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Mamta Bhojnalaya</h1>
            <p className="text-lg md:text-2xl">Pure Veg | Homely Taste | Affordable Price</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Mamta Bhojnalaya?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Home Style" className="rounded-2xl shadow-md mb-4 h-48 w-full object-cover" />
            <h3 className="text-xl font-medium mb-2">Home Style Food</h3>
            <p>Just like maa ke haath ka khana. Cooked with love and care daily.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1619714604882-db1396d4a718?q=80&w=1078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "alt="Quick Service" className="rounded-2xl shadow-md mb-4 h-48 w-full object-cover" />
            <h3 className="text-xl font-medium mb-2">Healthy and Hygenic food</h3>
            <p>Clean kitchen. Fast delivery. Served hot & fresh every time.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1741376509166-cbd74b608f5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Loved by All" className="rounded-2xl shadow-md mb-4 h-48 w-full object-cover" />
            <h3 className="text-xl font-medium mb-2">Loved by Students & Office-goers</h3>
            <p>Trusted by thousands for pocket-friendly, satisfying meals.</p>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-12 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">WEEKEND SPECIAL</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Veg Biryani",
              img: "https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Mysore Masala Dosa",
              img: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Special curry",
              img: "https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((dish, i) => (
            <div key={i} className="text-center">
              <img src={dish.img} alt={dish.name} className="rounded-2xl shadow-md mb-4 h-48 w-full object-cover" />
              <h3 className="text-xl font-medium">{dish.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 italic">“Best food for students. Simple and tasty!”</p>
            <h4 className="font-semibold mt-2">- Rohan, DU Student</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 italic">“Pure veg and tastes like home. Highly recommend!”</p>
            <h4 className="font-semibold mt-2">- Shalini, Working Professional</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 italic">“Affordable and fulfilling. Perfect for daily meals.”</p>
            <h4 className="font-semibold mt-2">- Arjun, Hostel Resident</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;


