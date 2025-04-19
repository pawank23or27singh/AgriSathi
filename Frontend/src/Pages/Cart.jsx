import { useCart } from '../Context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleRemoveClick = (id) => {
        setConfirmDeleteId(id);
    };

    const confirmRemove = (id) => {
        removeFromCart(id);
        setConfirmDeleteId(null);
    };

    const cancelRemove = () => {
        setConfirmDeleteId(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 p-6">
            <section className="max-w-6xl mx-auto mb-12">
                <h2 className="text-4xl font-extrabold text-green-800 mb-10 text-center">🛒 Your Shopping Cart</h2>

                <div className="space-y-6">
                    <AnimatePresence>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 group"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-28 h-28 object-cover rounded-xl border border-gray-200 mr-6"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                                        <div className="flex items-center gap-6 mt-2 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                                                >
                                                    -
                                                </button>

                                                <span className="font-semibold">{item.quantity}</span>

                                                <button
                                                    onClick={() => increaseQuantity(item.id)}
                                                    className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                                                >
                                                    +
                                                </button>                      </div>
                                            <span>Price: <strong className="text-green-700">₹{item.price * item.quantity}</strong></span>
                                        </div>
                                    </div>
                                    {confirmDeleteId === item.id ? (
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => confirmRemove(item.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 text-sm"
                                            >
                                                Yes
                                            </button>
                                            <button
                                                onClick={cancelRemove}
                                                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-400 text-sm"
                                            >
                                                No
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleRemoveClick(item.id)}
                                            className="opacity-0 group-hover:opacity-100 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all text-sm font-semibold"
                                        >
                                            Remove
                                        </button>
                                    )}

                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-gray-600 py-24"
                            >
                                <p className="text-3xl mb-4">🛍️ Your cart is empty!</p>
                                <p className="text-md">Add some fresh crops and grains! 🌾</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Total Section */}
                {cartItems.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-16 text-right bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                    >
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Total: ₹{cartTotal}</h3>
                        <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full transition-all text-lg font-semibold">
                            Proceed to Checkout
                        </button>
                    </motion.div>
                )}
            </section>
        </div>
    );
};

export default Cart;
