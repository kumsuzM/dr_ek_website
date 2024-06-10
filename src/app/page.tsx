import * as React from "react";
import Image from "next/image";
import { Funds, Services, Practice } from "@/app/components";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col items-center px-16 pt-3.5 w-full max-md:px-5 max-md:max-w-full">
        <section className="self-center mt-14 text-5xl text-center text-teal-500 uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <span className="text-6xl">E</span>rsoy{" "}
          <span className="text-6xl">K</span>umsuz{" "}
          <span className="text-6xl">D</span>ental{" "}
          <span className="text-6xl">S</span>urgeon
        </section>
        <h2 className="self-center mt-7 text-2xl text-black capitalize tracking-[6.25px] max-md:max-w-full">
          General Implant & Cosmetic Dentistry
        </h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1002d2f5ae084a61b9155fda979e40577a995a9b700057bf83671652f29edfe?apiKey=1c365991cad646539ab14038066c3ab4&"
          alt="Dental office"
          className="mt-12 w-full aspect-[3.23] max-md:mt-10 max-md:max-w-full"
        />
        <section className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb3c0c2d027696e9c1c5b305019cfa089b1e21b8d44e9c151a792627f3e721f4?apiKey=1c365991cad646539ab14038066c3ab4&"
                alt="Dental procedure"
                className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <article className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full min-[1704px]:pt-0 pt-12">
                <h3 className="text-5xl text-teal-500 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Ersoy Kumsuz Dental Surgeon
                </h3>
                <p className="mt-8 text-base leading-8 text-stone-500 max-md:max-w-full">
                  We aim to provide first class dental care in a relaxed yet
                  professional atmosphere with competitive affordable pricing.
                </p>
                <p className="mt-8 text-base leading-8 text-stone-500 max-md:max-w-full">
                  We are located on the corner of Helena st and Auburn Rd in
                  Auburn and have been offering Dental Services in the area
                  since 2002. We aim to provide the highest level of treatment
                  at very competitive pricing ensuring quality dental treatment
                  is available to all in the community.
                </p>
                <div className="flex flex-col justify-center items-start px-3 py-2 mt-9 bg-white border border-solid border-stone-300 max-md:pr-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/29cdda9c05d019c9b56d417e467b56e9eff61231b3a7ca42b698aa1ec54a7e63?apiKey=1c365991cad646539ab14038066c3ab4&"
                    alt="Dental tools"
                    className="max-w-full aspect-[2.17] w-[324px]"
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
    </div>
  );
}
