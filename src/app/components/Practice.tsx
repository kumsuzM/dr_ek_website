import React from "react";
import Image from "next/image";

const Practice = () => {
  return (
    <div className="bg-teal-500 w-full mt-32 py-6 px-4">
      <h2 className="self-center mt-12 mb-10 text-5xl text-center text-white leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Our Practice
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
        <Image
          loading="lazy"
          src="/our_prac_1.jpg"
          width={470}
          height={450}
          alt="image of practice"
          className="rounded-lg hover:scale-105 transition duration-300 ease-in-out"
        />
        <Image
          loading="lazy"
          src="/our_prac_2.jpg"
          width={470}
          height={450}
          alt="image of practice"
          className="rounded-lg hover:scale-105 transition duration-300 ease-in-out"
        />
        <Image
          loading="lazy"
          src="/our_prac_3.jpg"
          width={470}
          height={450}
          alt="image of practice"
          className="rounded-lg hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Practice;
