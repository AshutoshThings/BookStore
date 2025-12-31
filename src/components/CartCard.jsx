import React from "react";

const CartCard = ({
  id,
  bookImageURL,
  bookTitle,
  bookAuthor,
  bookPrice,
  quantity,
  removeFromCart,
  updateQuantity,
}) => {
  return (
    <div className="w-3/4 mx-auto border-b py-6 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-32 flex-shrink-0">
        <img
          src={bookImageURL}
          alt={bookTitle}
          className="w-full h-40 object-cover rounded"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#3a2f1c]">{bookTitle}</h2>
          <p className="text-sm text-gray-500 mt-1">{bookAuthor}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border rounded">
            <button
              onClick={() => updateQuantity(id, -1)}
              className="px-3 py-1 text-lg hover:bg-gray-100"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => updateQuantity(id, 1)}
              className="px-3 py-1 text-lg hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <div className="text-lg font-semibold text-[#7A6A3A]">
            ₹ {bookPrice * quantity}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => removeFromCart(id)}
          className="text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
