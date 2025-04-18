import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-green-700 p-4">
        <div className="text-white font-bold text-xl">AgriConnect</div>
        <div className="flex space-x-6 text-white font-semibold">
          <a href="#">Alerts</a>
          <a href="#">Marketplace</a>
          <a href="#">About Us</a>
        </div>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search products or services"
            className="px-2 py-1 rounded-l"
          />
          <button className="bg-white text-green-700 px-3 py-1 rounded-r border-l ">
            <img src={assets.search_icon} alt="" className='w-5.1 '/>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
