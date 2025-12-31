import React from "react";
import { useCart } from "../context/CartContext";

const CartCheckout = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const TAX_RATE = 0.05;
  const tax = subtotal * TAX_RATE;

  const total = subtotal + tax;

  return (
    <div className="w-3/4 mx-auto mt-10 bg-[#F7F5EE] p-6 rounded border">
      <h2 className="text-2xl font-bold mb-6">Cart Summary</h2>

      <div className="flex justify-between mb-3">
        <span className="text-gray-600">Subtotal</span>
        <span>₹ {subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span className="text-gray-600">Tax (5%)</span>
        <span>₹ {tax.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
        <span>Total</span>
        <span>₹ {total.toFixed(2)}</span>
      </div>

      <button
        disabled={cartItems.length === 0}
        className="mt-6 w-full bg-[#daa556] text-white py-3 rounded
          hover:bg-[#c5943e] transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartCheckout;
