import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 mx-auto my-12 md:my-20 px-6 gap-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-prata text-4xl md:text-6xl pb-5 text-center md:text-left">
            Man&apos;s Search for Meaning
          </h1>

          <p className="text-base leading-relaxed font-raleway my-6 text-center md:text-left">
            Man&apos;s Search for Meaning is a 1946 book by Viktor Frankl
            chronicling his experiences as a prisoner in Nazi concentration
            camps during World War II, and describing his psychotherapeutic
            method, which involved identifying a purpose to each person&apos;s
            life through one of three ways: the completion of tasks, caring for
            another person, or finding meaning by facing suffering with dignity.
          </p>

          <button className="w-full md:w-2/5 border rounded-sm px-4 py-3 mt-4 hover:bg-[#cac5bd] hover:text-white transition duration-300">
            READ MORE
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="../src/assets/Cage.jpeg"
            alt="Book cover"
            className="w-4/5 md:w-3/4 shadow-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
