import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [usdToInr, setUsdToInr] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setUsdToInr(data.rates.INR))
      .catch((err) => console.error(err));
  }, []);

  if (!usdToInr || products.length === 0) {
    return (
      <div className="text-center mt-20 text-xl">Loading Latest Stocks...</div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center m-auto">
        <div className="text-4xl font-prata font-bold p-10">
          Latest In Stocks
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 m-auto">
          {products.map((book) => (
            <Cards
              key={book.id}
              bookImageURL={book.image}
              bookTitle={book.title}
              bookAuthor={book.category}
              bookPrice={Math.round(book.price * usdToInr)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
