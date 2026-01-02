import React from "react";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 mx-auto my-12 md:my-20 px-6 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-prata text-4xl md:text-6xl pb-5 text-center md:text-left"
          >
            Man&apos;s Search for Meaning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base leading-relaxed font-raleway my-6 text-center md:text-left"
          >
            Man&apos;s Search for Meaning is a 1946 book by Viktor Frankl
            chronicling his experiences as a prisoner in Nazi concentration
            camps during World War II, and describing his psychotherapeutic
            method, which involved identifying a purpose to each person&apos;s
            life through one of three ways: the completion of tasks, caring for
            another person, or finding meaning by facing suffering with dignity.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="w-full md:w-2/5 border rounded-sm px-4 py-3 mt-4 hover:bg-[#cac5bd] hover:text-white transition duration-300"
          >
            READ MORE
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/Cage.jpeg"
            alt="Book cover"
            className="w-4/5 md:w-3/4 shadow-xl rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
