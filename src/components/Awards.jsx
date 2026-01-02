import React from "react";
import { motion } from "motion/react";

const Awards = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#EDEBE4] w-full py-12 md:py-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 px-6"
      >
        <motion.img
          variants={item}
          src="/assets/image1.png"
          alt="award1"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
          className="w-32 md:w-40 cursor-pointer"
        />

        <motion.img
          variants={item}
          src="/assets/image2.png"
          alt="award2"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
          className="w-32 md:w-40 cursor-pointer"
        />

        <motion.img
          variants={item}
          src="/assets/image3.png"
          alt="award3"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
          className="w-32 md:w-40 cursor-pointer"
        />

        <motion.img
          variants={item}
          src="/assets/image4.png"
          alt="award4"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
          className="w-32 md:w-40 cursor-pointer"
        />
      </motion.div>
    </motion.section>
  );
};

export default Awards;
