import * as React from "react";
import Image from "next/image";
import { Funds, Services, Practice } from "@/app/components";

const CroppedSidesImage = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 -mx-8">
        {" "}
        {/* Adjust -mx-8 to crop more or less */}
        <Image
          loading="lazy"
          src="/ek_hands_crossed.jpg"
          alt="Dental office"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-md:px-5 max-md:max-w-full">
      <section className="self-center mt-14 text-5xl text-center text-teal-500 uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="text-6xl">E</span>rsoy{" "}
        <span className="text-6xl">K</span>umsuz{" "}
        <span className="text-6xl">D</span>ental{" "}
        <span className="text-6xl">S</span>urgeon
      </section>
      <h2 className="self-center text-center mt-7 text-2xl text-black capitalize tracking-[6.25px] max-md:max-w-full">
        General Implant & Cosmetic Dentistry
      </h2>
      <div className="relative w-full h-auto" style={{ height: "auto" }}>
        <Image
          loading="lazy"
          src="/ek_hands_crossed.jpg"
          alt="Dental office"
          width={1920}
          height={1080}
          unoptimized
          className="mt-12 w-full max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <section className="w-full max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
          <div className="flex flex-col w-[54%] max-lg:ml-0 max-lg:w-full">
            <Image
              loading="lazy"
              src="/reception_2.jpg"
              height={400}
              width={400}
              alt="Dental procedure"
              unoptimized
              className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <article className="flex flex-col ml-5 w-[46%] max-lg:ml-0 max-lg:w-full max-lg:px-5 max-md:px-0">
            <div className="flex flex-col self-stretch px-5 my-auto max-lg:mt-10 max-lg:max-w-full min-[1704px]:pt-0 pt-12">
              <h3 className="text-5xl text-teal-500 leading-[60px] max-lg:max-w-full max-lg:leading-[53px] text-center">
                Ersoy Kumsuz Dental Surgeon
              </h3>
              <p className="mt-8 text-base leading-8 text-stone-500 max-lg:max-w-full">
                We aim to provide first class dental care in a relaxed yet
                professional atmosphere with competitive affordable pricing.
              </p>
              <p className="mt-8 text-base leading-8 text-stone-500 max-lg:max-w-full">
                We are located on the corner of Helena st and Auburn Rd in
                Auburn and have been offering Dental Services in the area since
                2002. We aim to provide the highest level of treatment at very
                competitive pricing ensuring quality dental treatment is
                available to all in the community.
              </p>
              <div className="flex flex-col justify-center items-center px-3 py-2 mt-9 max-md:pr-5 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src="/bulk-bill.png"
                  alt="Medicare - we are happy to bulk bill"
                  className="w-[324px]"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      <Services />
      <Practice />
      <Funds />
    </main>
  );
}
