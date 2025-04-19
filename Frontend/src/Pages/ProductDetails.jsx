import React from 'react';
import { assets } from '../assets/assets';

const ProductDetails = () => {
  return (
    <div className="font-sans">
      <header className="bg-green-200 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">AgriSaathi</div>
        <div className="flex space-x-4">
          <input type="text" placeholder="Search for crop service" className="p-2 border rounded" />
          <div className="bg-green-500 text-white p-2 rounded">Alerts & Updates</div>
          <div className="bg-green-500 text-white p-2 rounded">Marketplace</div>
          <button className="bg-black text-white p-2 rounded">Log in</button>
        </div>
      </header>

      <main className="min-h-screen">
        <section className="relative">
          <img src={assets.landscape} alt="Farm Landscape" className="w-full h-64 object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold">Products</h1>
            <p className="text-lg">Market Listings – 17/08/2023</p>
          </div>
        </section>

        <section className="flex p-6">
          <div className="w-2/3 pr-6">
            <p className="text-gray-700">Discover the latest updates on crop listings, weather forecasts, and market prices tailored for Indian farmers...</p>
          </div>
          <div className="w-1/3 bg-green-400 p-4 text-white">
            <h2 className="text-2xl font-bold">Services</h2>
            <div className="my-4">
              <p>Agent Delivery <span className="float-right">− 2 + ₴50</span></p>
            </div>
            <button className="w-full bg-green-500 text-white p-2 rounded">Order now</button>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-4 p-6">
          <img src="https://via.placeholder.com/300x200" alt="Tractor" className="w-full h-48 object-cover" />
          <img src="https://via.placeholder.com/300x200" alt="Vegetables" className="w-full h-48 object-cover" />
          <img src="https://via.placeholder.com/300x200" alt="Field" className="w-full h-48 object-cover" />
          <img src="https://via.placeholder.com/300x200" alt="Farm" className="w-full h-48 object-cover" />
          <img src="https://via.placeholder.com/300x200" alt="Crops" className="w-full h-48 object-cover" />
          <img src="https://via.placeholder.com/300x200" alt="Harvester" className="w-full h-48 object-cover" />
        </section>
      </main>

      <footer className="bg-green-700 text-white p-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold">Connect with Us</h3>
            <input type="text" placeholder="Enter your email address" className="p-2 border rounded w-full my-2" />
            <div className="flex space-x-2">
              <button className="bg-gray-800 text-white p-2 rounded">📧</button>
              <button className="bg-gray-800 text-white p-2 rounded">📞</button>
            </div>
          </div>
          <div className="flex space-x-20">
            <div>
              <h4 className="font-bold">About</h4>
              <p>About Services</p>
              <p>Marketplace</p>
              <p>Team News</p>
              <p>Contact</p>
            </div>
            <div>
              <h4 className="font-bold">Follow us</h4>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Pinterest</p>
            </div>
            <div>
              <h4 className="font-bold">For farmers</h4>
              <p>Partnerships</p>
              <p>List your crop for buyers</p>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>AgriSaathi</p>
        </div>
        <div className="text-center mt-2 text-sm">
          <p>AgriSaathi | Local | Marketplace | Language</p>
        </div>
        <div className="text-center mt-2 text-sm">
          <p>© AgriSaathi 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;
