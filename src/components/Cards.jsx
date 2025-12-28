import React from "react";

const Cards = ({ bookImageURL, bookTitle, bookAuthor, bookPrice }) => {
  return (
    <div className="w-72 bg-[#F7F5EE] border border-[#E5E2D8]">
      <div className="relative w-full overflow-hidden group">
        <img
          src={bookImageURL}
          alt={bookTitle}
          className="w-full h-96 object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-black text-white py-4 font-semibold tracking-wide cursor-pointer">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center py-6 space-y-2">
        <h2 className="text-xl text-[#7A6A3A] uppercase">{bookTitle}</h2>
        <p className="text-gray-600 uppercase">{bookAuthor}</p>
        <p className="text-lg font-semibold text-[#7A6A3A]">₹ {bookPrice}</p>
      </div>
    </div>
  );
};

export default Cards;
