import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = ['English', 'Hindi', 'Tamil', 'Bengali', 'Telugu'];

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-5 px-6 border-t border-green-700">
      <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">

        {/* Left - Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left relative">
          <span className="hover:underline cursor-pointer">AgriSaathi</span>
          <span className="hover:underline cursor-pointer">Local</span>
          <span className="hover:underline cursor-pointer">About Us</span>

          {/* Language with Dropdown */}
          <div className="relative inline-block text-left">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="hover:underline focus:outline-none"
            >
              Language: {selectedLanguage} ▾
            </button>

            {dropdownOpen && (
              <div className="absolute mt-2 w-32 bg-white text-green-800 rounded shadow-lg z-50">
                {languages.map((lang) => (
                  <div 
                    key={lang} 
                    onClick={() => handleLanguageChange(lang)} 
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer text-sm"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center - Copyright */}
        <div className="text-center text-xs text-green-200">
          &copy; {new Date().getFullYear()} AgriSaathi. All rights reserved.
        </div>

        {/* Right - Contact + Socials */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="text-sm text-center md:text-right">
            <p>support@agriventureindia.com</p>
            <p>+91 123 456 7890</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-300 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
