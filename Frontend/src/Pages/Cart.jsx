import React from 'react';
import Footer from '../Components/Footer';

// Single Cart Item component
const CartItem = ({ title, quantity, price, image }) => (
  <div className="flex items-center p-4 border-b border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
    <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg mr-4" />
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">Quantity: {quantity}</p>
      <p className="text-green-700 font-semibold">Price: ₹{price}</p>
    </div>
    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all">Remove</button>
  </div>
);

// Recommended Item component
const RecommendationCard = ({ title, price, image }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-2" />
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-green-700 font-semibold mb-2">₹{price}</p>
    <button className="bg-green-700 text-white px-4 py-2 w-full rounded-md hover:bg-green-800 transition-all">Add to Cart</button>
  </div>
);

const Cart = () => {
  // Example cart data
  const cartItems = [
    { title: "Wheat", quantity: 2, price: 500, image: "https://via.placeholder.com/100" },
    { title: "Rice", quantity: 1, price: 300, image: "https://via.placeholder.com/100" }
  ];

  const recommendedItems = [
    { title: "Maize", price: 400, image: "https://via.placeholder.com/150" },
    { title: "Barley", price: 350, image: "https://via.placeholder.com/150" },
    { title: "Millet", price: 450, image: "https://via.placeholder.com/150" },
    { title: "Soybean", price: 380, image: "https://via.placeholder.com/150" }
  ];

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Cart Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Your Cart</h2>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <CartItem 
              key={index}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 text-right">
          <h3 className="text-2xl font-semibold">Total: ₹{cartTotal}</h3>
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all">Proceed to Checkout</button>
        </div>
      </section>

      {/* Recommendations Section */}
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6">Recommended Crops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {recommendedItems.map((item, index) => (
            <RecommendationCard 
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
