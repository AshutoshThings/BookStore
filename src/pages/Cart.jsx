import React from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import CartCard from "../components/CartCard";
import CartCheckout from "../components/CartCheckout";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-20 text-xl">Your cart is empty</div>;
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="mt-10 flex flex-col item-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            id={item.id}
            bookImageURL={item.image}
            bookTitle={item.title}
            bookAuthor={item.author}
            bookPrice={item.price}
            quantity={item.quantity}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))}
        <CartCheckout />
      </div>
    </div>
  );
};

export default Cart;
