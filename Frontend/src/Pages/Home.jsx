import React from 'react'
import Navbar from '../Components/Navbar'
import { assets } from '../assets/assets'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                {/* Hero Section */}
                <main className="w-full max-w-7xl flex flex-col md:flex-row items-center p-4">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-4">
                            Receive weather alerts, market updates, and more<br />
                            In your Local Language
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Verified marketplace with agent delivery services for farmers and buyers
                        </p>
                        <div className="space-x-4">
                            <button className="bg-green-900 text-white px-6 py-2 rounded">Join now</button>
                            <button className="bg-green-500 text-white px-6 py-2 rounded">List crop</button>
                        </div>
                        <div className="flex space-x-4 mt-6 text-gray-600">
                            <span>3K+ Listings</span>
                            <span>500 Partners</span>
                            <span>150K+ Users online</span>
                        </div>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">
                        <div className="bg-green-200 p-4 rounded-lg text-center">
                            <img src={assets.farm} alt="Farm" className="mx-auto mb-4 w-full h-48 object-cover rounded-lg" />
                            <p className="text-gray-600">Current 3.8</p>
                            <p className="text-gray-600">Time left 20h 15m 30s</p>
                            <div className="space-x-2 mt-4">
                                <button className="bg-black text-white px-4 py-2 rounded">Order now</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded">View listing</button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Top Sellers Section */}
                <section className="w-full max-w-7xl p-4">
                    <h3 className="text-2xl font-bold mb-4">Top sellers this week</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-green-700 text-white p-4 rounded-lg">
                            <img src={assets.cows} alt="Sheep" className="w-full h-32 object-cover rounded-lg mb-4" />
                            <p>Raj Agrawal @RajAgrawal</p>
                            <p>$9,000</p>
                            <p>8,750 Subscribers</p>
                            <button className="bg-white text-green-700 px-2 py-1 rounded mt-2">Subscribe</button>
                        </div>
                        <div className="bg-green-700 text-white p-4 rounded-lg">
                            <img src={assets.farm2} alt="Farm 2" className="w-full h-32 object-cover rounded-lg mb-4" />
                            <p>Kavita Singh @KavitaFarmer</p>
                            <p>$7,500</p>
                            <p>Verified</p>
                            <button className="bg-white text-green-700 px-2 py-1 rounded mt-2">Connect</button>
                        </div>
                        <div className="bg-green-700 text-white p-4 rounded-lg">
                            <img src={assets.market} alt="Market" className="w-full h-32 object-cover rounded-lg mb-4" />
                            <p>Marketplace Listings</p>
                            <p>$6,200</p>
                            <p>New Arrivals</p>
                            <button className="bg-white text-green-700 px-2 py-1 rounded mt-2">Book</button>
                        </div>
                        <div className="bg-green-700 text-white p-4 rounded-lg">
                            <img src={assets.cows} alt="Sheep" className="w-full h-32 object-cover rounded-lg mb-4" />
                            <p>Ravi Kumar @RaviLivestock</p>
                            <p>$8,000</p>
                            <p>Trusted Seller</p>
                            <button className="bg-white text-green-700 px-2 py-1 rounded mt-2">Subscribe</button>
                        </div>
                    </div>
                </section>

                {/* Subscription Section */}
                <section className="w-full max-w-7xl p-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <img src={assets.footer_image} alt="Farmers" className="w-60 h-40 object-cover rounded-lg" />
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-4">
                                Get the latest updates and offers on agricultural solutions tailored for you.
                            </h3>
                            <div className="flex justify-center md:justify-start">
                                <input
                                    type="text"
                                    placeholder="Enter your mobile number here"
                                    className="border p-2 rounded-l w-64"
                                />
                                <button className="bg-green-700 text-white px-4 py-2 rounded-r">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full max-w-7xl p-4 bg-green-200 text-center">
                    <div className="space-x-4">
                        <span>AgriConnect</span>
                        <span>Local</span>
                        <span>Marketpia</span>
                        <span>Language</span>
                    </div>
                    <p className="mt-2">&copy; AgriConnect 2022</p>
                </footer>
            </div>
        </div>
    )
}

export default Home
