import React from "react";
import Cards from "./Cards";
import { motion } from "motion/react";
const FeaturedBooks = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center items-center pt-30"
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[#afafaf]"
      >
        SOME QUALITY ITEMS
      </motion.h3>

      <div className="flex w-full items-center mt-5">
        <span className="w-2/5 border-t border-t-[#E0E0E0] ml-20"></span>
        <span className="w-3/5 text-center text-[#2f2f2f] text-5xl font-raleway p-2 font-semibold">
          FEATURED BOOKS
        </span>
        <span className="w-2/5 border-t border-t-[#E0E0E0] mr-20"></span>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex w-full items-center mt-5"
      >
        FEATURED BOOKS
      </motion.div> */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex gap-8 my-8 w-3/4 flex-wrap justify-center"
      >
        <Cards
          id={1}
          bookImageURL={"/assets/books/book1.jpg"}
          bookTitle={"Regretting You"}
          bookAuthor={"Colleen Hoover"}
          bookPrice={299}
        />
        <Cards
          id={2}
          bookImageURL={"/assets/books/book2.jpeg"}
          bookTitle={"What we can know"}
          bookAuthor={"Ian McEvan"}
          bookPrice={149}
        />
        <Cards
          id={3}
          bookImageURL={"/assets/books/book3.jpeg"}
          bookTitle={"The Stranger"}
          bookAuthor={"Albert Camus"}
          bookPrice={179}
        />
        <Cards
          id={4}
          bookImageURL={"/assets/books/book4.jpeg"}
          bookTitle={"Metamorphosis"}
          bookAuthor={"Franz Kafka"}
          bookPrice={89}
        />
        <Cards
          id={5}
          bookImageURL={"/assets/books/book5.jpeg"}
          bookTitle={"Things fall apart"}
          bookAuthor={"Chinua Achebe"}
          bookPrice={179}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedBooks;
