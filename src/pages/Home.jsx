import React from "react";
import Hero from "../components/Hero.jsx";
import Awards from "../components/Awards.jsx";
import FeaturedBooks from "../components/FeaturedBooks.jsx";
import Quote from "../components/Quote.jsx";
import Footer from "../components/Footer.jsx";
const Home = () => {
  return (
    <>
      <Hero />
      <Awards />
      <FeaturedBooks />
      <Quote />
      <Footer />
    </>
  );
};

export default Home;
