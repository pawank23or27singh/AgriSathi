import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Your Cart</h2>

        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center p-4 border-b border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-green-700 font-semibold">Price: ₹{item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>

        {/* Total */}
        {cartItems.length > 0 && (
          <div className="mt-6 text-right">
            <h3 className="text-2xl font-semibold">Total: ₹{cartTotal}</h3>
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all">Proceed to Checkout</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
