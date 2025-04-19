import React, { useState, useRef } from 'react';
import { assets } from '../assets/assets';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import { Link } from 'react-router-dom';

const Marketplace = () => {
    // Create a ref for the product section to scroll to it
    const productSectionRef = useRef(null);

    // All Products
    const products = [
        { id: 1, name: 'Seeds', price: 500, quality: 'high', category: 'seeds', img: assets.seeds },
        { id: 2, name: 'Fertilizer', price: 300, quality: 'medium', category: 'fertilizers', img: assets.fertilizer },
        { id: 3, name: 'Pesticides', price: 150, quality: 'high', category: 'pesticides', img: assets.pests },
        { id: 4, name: 'Tools', price: 200, quality: 'low', category: 'tools', img: assets.tools },
        { id: 5, name: 'Seeds', price: 500, quality: 'high', category: 'seeds', img: assets.seeds },
        { id: 6, name: 'Pesticides', price: 150, quality: 'high', category: 'pesticides', img: assets.pests },
        { id: 7, name: 'Pesticides', price: 150, quality: 'high', category: 'pesticides', img: assets.pests },
        { id: 8, name: 'Seeds', price: 500, quality: 'high', category: 'seeds', img: assets.seeds },
        { id: 9, name: 'Fertilizer', price: 300, quality: 'medium', category: 'fertilizers', img: assets.fertilizer },
        { id: 10, name: 'Tools', price: 200, quality: 'low', category: 'tools', img: assets.tools },
        { id: 11, name: 'Pesticides', price: 150, quality: 'high', category: 'pesticides', img: assets.pests },
        { id: 12, name: 'Seeds', price: 500, quality: 'high', category: 'seeds', img: assets.seeds },
    ];

    // Filter States
    const [selectedCategory, setSelectedCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState(1000);
    const [selectedQuality, setSelectedQuality] = useState('');
    const [quantity, setQuantity] = useState(10);
    const [organic, setOrganic] = useState(false);
    const [origin, setOrigin] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleProducts, setVisibleProducts] = useState(8); // Initially display 8 products

    // Handle clear filters
    const clearFilters = () => {
        setSelectedCategory('');
        setMaxPrice(1000);
        setSelectedQuality('');
        setQuantity(10);
        setOrganic(false);
        setOrigin('');
        setSearchQuery('');
    };

    // Filtered products
    const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
        const priceMatch = product.price <= maxPrice;
        const qualityMatch = selectedQuality ? product.quality === selectedQuality : true;
        const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && priceMatch && qualityMatch && searchMatch;
    });

    // Load more products
    const loadMoreProducts = () => {
        setVisibleProducts(visibleProducts + 8); // Show 8 more products
    };

    // Scroll to the product section
    const scrollToProducts = () => {
        productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="font-sans">
            <Navbar />

            {/* Pass the scroll function to HeroSection */}
            <HeroSection onClick={scrollToProducts} />

            {/* Filters and Search Bar */}
            <div className="flex p-6">
                {/* Filters Sidebar */}
                <aside className="w-1/4 pr-6 bg-green-100 p-6 rounded-lg shadow-lg">
                    <h2 className="font-bold text-xl mb-4">Filters</h2>

                    {/* Product Category */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg">Product Category</h3>
                        <div className="flex flex-wrap space-x-4">
                            <button onClick={() => setSelectedCategory('')} className={`px-4 py-2 rounded-lg ${!selectedCategory && 'bg-green-600 text-white'}`}>All</button>
                            <button onClick={() => setSelectedCategory('seeds')} className={`px-4 py-2 rounded-lg ${selectedCategory === 'seeds' && 'bg-green-600 text-white'}`}>Seeds</button>
                            <button onClick={() => setSelectedCategory('fertilizers')} className={`px-4 py-2 rounded-lg ${selectedCategory === 'fertilizers' && 'bg-green-600 text-white'}`}>Fertilizers</button>
                            <button onClick={() => setSelectedCategory('pesticides')} className={`px-4 py-2 rounded-lg ${selectedCategory === 'pesticides' && 'bg-green-600 text-white'}`}>Pesticides</button>
                            <button onClick={() => setSelectedCategory('tools')} className={`px-4 py-2 rounded-lg ${selectedCategory === 'tools' && 'bg-green-600 text-white'}`}>Tools</button>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg">Price Range</h3>
                        <input type="range" min="0" max="1000" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full h-2 bg-gray-300 rounded-lg" />
                        <div>₹0 - ₹{maxPrice}</div>
                    </div>

                    {/* Quality */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg">Quality</h3>
                        <div className="flex flex-col space-y-2">
                            <label><input type="radio" name="quality" value="high" checked={selectedQuality === 'high'} onChange={(e) => setSelectedQuality(e.target.value)} className="mr-2" />High</label>
                            <label><input type="radio" name="quality" value="medium" checked={selectedQuality === 'medium'} onChange={(e) => setSelectedQuality(e.target.value)} className="mr-2" />Medium</label>
                            <label><input type="radio" name="quality" value="low" checked={selectedQuality === 'low'} onChange={(e) => setSelectedQuality(e.target.value)} className="mr-2" />Low</label>
                        </div>
                    </div>

                    {/* Clear Filters */}
                    <div className="mt-4">
                        <button onClick={clearFilters} className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-700 transition duration-300">Clear Filters</button>
                    </div>
                </aside>

                {/* Product Section */}
                <section className="w-3/4 flex flex-col" ref={productSectionRef}>
                    {/* Search Bar */}
                    <div className="mb-6 ml-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    <div className='flex flex-row justify-between m-4'>
                        {/* Selected Filters Display */}
                        <div className="mb-4 text-lg font-semibold">
                            {selectedCategory ? `Showing: ${selectedCategory}` : 'Showing All Products'}
                        </div>

                        <Link to={"/cart"} className='flex items-center'>
                            <img src={assets.cart} alt="Cart" className="w-6 h-6 mr-2 transform transition-transform duration-300 hover:scale-110" />
                            <Link className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300">Cart</Link>
                        </Link>

                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-4 gap-6">
                        {filteredProducts.slice(0, visibleProducts).map((product) => (
                            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                                <img src={product.img} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-lg" />
                                <h4 className="font-bold mb-1">{product.name}</h4>
                                <p className="text-gray-600 text-sm mb-2">High-quality {product.name.toLowerCase()} for healthy crops.</p>
                                <div className="bg-green-400 text-white px-2 py-1 inline-block mb-2 rounded-full">₹{product.price}</div>
                                <div className="flex justify-center items-center mb-2">
                                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                                </div>
                                <button className="mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-lg transition duration-300 shadow-md">Add to Cart</button>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    {visibleProducts < filteredProducts.length && (
                        <div className="mt-6 flex justify-center">
                            <button onClick={loadMoreProducts} className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                                View More
                            </button>
                        </div>
                    )}
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Marketplace;
