import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { Mosaic } from "react-loading-indicators";

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
      <div className="flex justify-center items-center bg-[#c7c0b5/10] h-screen">
        <Mosaic color="#616161" size="large" text="" textColor="" />
      </div>
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
              id={book.id}
              bookImageURL={book.image}
              bookTitle={book.title}
              bookAuthor={book.category}
              bookPrice={Math.round(book.price * usdToInr)}
            />
          ))}
        </div>
      </div>
      <div className="text-center text-xl my-20"> (20 Products)</div>
      <Footer />
    </div>
  );
};

export default Shop;
