import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="flex flex-col items-center w-full max-md:px-5 max-md:max-w-full">
      <section className="self-center mt-14 text-5xl text-center text-teal-500 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        {title}
      </section>
      <h2 className="self-center mt-7 text-2xl text-black capitalize tracking-[6.25px] max-md:max-w-full text-center">
        General Implant & Cosmetic Dentistry
      </h2>
      {children}
    </main>
  );
}
