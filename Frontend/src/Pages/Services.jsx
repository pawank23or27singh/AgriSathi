import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import Footer from '../Components/Footer';


// Define the ServiceCard component
const ServiceCard = ({ title, description, link, image }) => (
    <Link
        to={link}
        className="bg-white p-4 rounded shadow-md m-2 transition-all duration-300 flex items-center hover:shadow-lg hover:bg-green-50 hover:scale-105 overflow-hidden"
    >
        <div className="w-20 h-20 flex-shrink-0 mr-4 overflow-hidden rounded">
            <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
        <div className="flex flex-col">
            <h3 className="text-xl font-bold text-green-700">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </Link>
);

const Services = () => {
    return (
        <div>
            {/* <header className="bg-green-600 text-white p-4 flex justify-between">
        <div className="flex items-center">
          <span className="mr-2">🌱</span>
          <h1 className="text-xl font-bold">Agriventure India</h1>
        </div>
        <nav>
          <a href="#" className="mr-4">Home</a>
          <a href="#" className="mr-4">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header> */}

            <Navbar />

            <section className="bg-green-400 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">Core Services</h2>
                <p>Explore our range of services designed to tackle real agricultural challenges in India.</p>
            </section>

            <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <ServiceCard
                    title="SMS/WhatsApp Alerts"
                    description="Receive timely alerts in your local language about market trends and weather updates."
                    image={assets.sms}
                />
                <ServiceCard
                    title="Weather Alerts"
                    description="Stay informed with the latest weather updates to plan your farming activities effectively."
                    image={assets.weather}
                />
                <ServiceCard
                    title="Verified Marketplace"
                    description="Access a trusted platform to buy and sell agricultural products with ease."
                    link="/market"
                    image={assets.market}
                />
                <ServiceCard
                    title="Agent Delivery"
                    description="Reliable delivery services by certified agents to ensure your goods reach their destination safely."
                    image={assets.delivery}
                />
                <ServiceCard
                    title="Direct Crop Listing"
                    description="List your crops directly on our platform and connect with potential buyers instantly."
                    image={assets.crops2}
                />
                <ServiceCard
                    title="Connect to Buyers"
                    description="Facilitate direct communication with buyers for better negotiation and sales opportunities."
                    image={assets.buyers}
                />
                <ServiceCard
                    title="Cold Storage Booking"
                    description="Book cold storage facilities online to preserve your produce and reduce wastage."
                    image={assets.cold_storage}
                />
                <ServiceCard
                    title="Short-term Finance"
                    description="Access quick financing options to support your agricultural activities without hassle."
                    image={assets.finance}
                />
            </section>

            {/* <footer className="bg-green-800 text-white p-4 flex justify-between">
                <div>
                    <h3 className="text-xl font-bold">Contact Us</h3>
                    <p>Email: support@agriventureindia.com</p>
                    <p>Phone: +91 123 456 7890</p>
                </div>
                <div>
                    &copy; AgriSaathi 2025
                </div>
                <div>
                    <h3 className="text-xl font-bold">Quick Links</h3>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </footer> */}
            <Footer/>
        </div>
    );
};

export default Services;
