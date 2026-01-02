import React from "react";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";

const Cards = ({ id, bookImageURL, bookTitle, bookAuthor, bookPrice }) => {
  const { cartItems, addToCart } = useCart();

  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({
        id,
        title: bookTitle,
        author: bookAuthor,
        price: bookPrice,
        image: bookImageURL,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-72 bg-[#F7F5EE] border border-[#E5E2D8] group"
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={bookImageURL}
          alt={bookTitle}
          className="w-full h-96 object-cover"
        />

        <div
          className={`
            absolute bottom-0 left-0 right-0
            transition-transform duration-300
            ${
              isInCart
                ? "translate-y-0"
                : "translate-y-full group-hover:translate-y-0"
            }
          `}
        >
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`
              w-full py-4 font-semibold tracking-wide transition-colors duration-300
              ${
                isInCart
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-[#333]"
              }
            `}
          >
            {isInCart ? "ADDED TO CART ✓" : "ADD TO CART"}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center py-6 space-y-2">
        <h2 className="text-xl text-[#7A6A3A] uppercase">{bookTitle}</h2>
        <p className="text-gray-600 uppercase">{bookAuthor}</p>
        <p className="text-lg font-semibold text-[#7A6A3A]">₹ {bookPrice}</p>
      </div>
    </motion.div>
  );
};

export default Cards;
