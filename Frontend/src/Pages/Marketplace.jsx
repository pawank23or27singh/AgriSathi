import React from 'react'
import { assets } from '../assets/assets'
import Navbar from '../Components/Navbar'
const marketplace = () => {
    return (
        <div>
            <div className="font-sans">
                <Navbar />

                {/* Hero Section */}
                <section className="relative p-4 h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-800 opacity-60 z-0"></div> {/* Gradient overlay */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full relative z-10">
                        <img src={assets.crops1} alt="Crop 1" className="row-span-2 object-cover w-full h-full shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg" />
                        <img src={assets.crops4} alt="Crop 4" className="object-cover w-full h-full shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg" />
                        <img src={assets.crops3} alt="Crop 3" className="object-cover w-full h-full shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg" />
                    </div>
                </section>

                {/* Categories */}
                <div className="flex justify-center space-x-4 p-6">
                    <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-lg">Seeds</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-lg">Fertilizers</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-lg">Pesticides</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-lg">Tools</button>
                </div>

                {/* Main Content */}
                <div className="flex p-6">
                    {/* Filters */}
                    <aside className="w-1/4 pr-6 bg-green-100 p-6 rounded-lg shadow-lg">
                        <h2 className="font-bold text-xl mb-4">Filters</h2>

                        {/* Product Category Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg">Product Category</h3>
                            <select className="w-full p-2 border rounded-md">
                                <option value="seeds">Seeds</option>
                                <option value="fertilizers">Fertilizers</option>
                                <option value="pesticides">Pesticides</option>
                                <option value="tools">Tools</option>
                            </select>
                        </div>

                        {/* Quantity Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg">Quantity</h3>
                            <div className="flex justify-between">
                                <span>1-5</span>
                                <input type="range" min="1" max="10" className="w-full h-2 bg-gray-300 rounded-lg" />
                                <span>10+</span>
                            </div>
                        </div>

                        {/* Price Range Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg">Price Range</h3>
                            <div className="flex justify-between">
                                <span>₹0</span>
                                <input type="range" min="0" max="1000" className="w-full h-2 bg-gray-300 rounded-lg" />
                                <span>₹1000+</span>
                            </div>
                        </div>

                        {/* Quality Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg">Quality</h3>
                            <div className="flex flex-col space-y-2">
                                <label className="flex items-center">
                                    <input type="radio" name="quality" value="high" className="mr-2" />
                                    High
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="quality" value="medium" className="mr-2" />
                                    Medium
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="quality" value="low" className="mr-2" />
                                    Low
                                </label>
                            </div>
                        </div>

                        {/* Organic Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg">Organic</h3>
                            <div className="flex flex-col space-y-2">
                                <label><input type="checkbox" className="mr-2" /> Chemical-free</label>
                                <label><input type="checkbox" className="mr-2" /> Eco-friendly</label>
                            </div>
                        </div>

                        {/* Origin Filter */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg">Origin</h3>
                            <select className="w-full p-2 border rounded-md">
                                <option value="local">Local</option>
                                <option value="imported">Imported</option>
                            </select>
                        </div>

                        {/* Clear Filters Button */}
                        <div className="mt-4">
                            <button className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-700 transition duration-300">
                                Clear Filters
                            </button>
                        </div>
                    </aside>

                    {/* Products */}
                    <section className="w-3/4 grid grid-cols-4 gap-6">
                        {/* Seeds Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.seeds} alt="Seeds" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Seeds</h4>
                            <p className="text-gray-600 text-sm mb-2">High-quality seeds for healthy crops.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹500</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>

                        {/* Fertilizer Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.fertilizer} alt="Fertilizer" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Fertilizer</h4>
                            <p className="text-gray-600 text-sm mb-2">Organic fertilizer to enhance growth.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹300</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>

                        {/* Pesticides Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.pests} alt="Pesticides" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Pesticides</h4>
                            <p className="text-gray-600 text-sm mb-2">Effective pesticides for crop protection.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹150</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>

                        {/* Seeds Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.seeds} alt="Seeds" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Seeds</h4>
                            <p className="text-gray-600 text-sm mb-2">High-quality seeds for healthy crops.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹500</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>

                        {/* Tools Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.tools} alt="Tools" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Tools</h4>
                            <p className="text-gray-600 text-sm mb-2">Durable tools for efficient farming.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹200</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>

                        {/* Seeds Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.seeds} alt="Seeds" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Seeds</h4>
                            <p className="text-gray-600 text-sm mb-2">High-quality seeds for healthy crops.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹500</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.pests} alt="Pesticides" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Pesticides</h4>
                            <p className="text-gray-600 text-sm mb-2">Effective pesticides for crop protection.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹150</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.pests} alt="Pesticides" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Pesticides</h4>
                            <p className="text-gray-600 text-sm mb-2">Effective pesticides for crop protection.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹150</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>
                        {/* Seeds Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.seeds} alt="Seeds" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Seeds</h4>
                            <p className="text-gray-600 text-sm mb-2">High-quality seeds for healthy crops.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹500</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>
                        {/* Seeds Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.seeds} alt="Seeds" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Seeds</h4>
                            <p className="text-gray-600 text-sm mb-2">High-quality seeds for healthy crops.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹500</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.pests} alt="Pesticides" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Pesticides</h4>
                            <p className="text-gray-600 text-sm mb-2">Effective pesticides for crop protection.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹150</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>
                        {/* Seeds Card */}
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            <img src={assets.seeds} alt="Seeds" className="w-full h-32 object-cover mb-2 rounded-lg" />
                            <h4 className="font-bold mb-1">Seeds</h4>
                            <p className="text-gray-600 text-sm mb-2">High-quality seeds for healthy crops.</p> {/* Product Description */}
                            <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹500</div>
                            <div className="flex justify-center items-center mb-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐</span> {/* Rating */}
                            </div>
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Buy</button>
                        </div>

                    </section>
                </div>

                <footer className="bg-green-800 text-white p-4 flex justify-between items-center text-sm">
                    <div className="flex space-x-4">
                        <span>AgriConnect</span>
                        <span>Local</span>
                        <span>Marketplace</span>
                        <span>Language</span>
                    </div>
                    <div>
                        &copy; AgriConnect 2025
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default marketplace
