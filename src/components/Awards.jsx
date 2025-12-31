import React from "react";

const Awards = () => {
  return (
    <section className="bg-[#EDEBE4] w-full py-12 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 px-6">
        <img
          src="/assets/image1.png"
          alt="award1"
          className="w-32 md:w-40 hover:cursor-pointer transition-transform duration-300 hover:scale-105"
        />

        <img
          src="/assets/image2.png"
          alt="award2"
          className="w-32 md:w-40 hover:cursor-pointer transition-transform duration-300 hover:scale-105"
        />

        <img
          src="/assets/image3.png"
          alt="award3"
          className="w-32 md:w-40 hover:cursor-pointer transition-transform duration-300 hover:scale-105"
        />

        <img
          src="/assets/image4.png"
          alt="award4"
          className="w-32 md:w-40 hover:cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Awards;
