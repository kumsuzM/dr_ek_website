import React, { ReactNode } from "react";

import { IoTimeOutline } from "react-icons/io5";
import { FaMap, FaPhone } from "react-icons/fa";

import { MdMailOutline } from "react-icons/md";

import Link from "next/link";

interface IconCardProps {
  icon: ReactNode;
  label: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, label }) => (
  <div className="flex flex-col px-14 w-full text-lg text-white bg-stone-900 max-md:px-5 max-md:mt-4">
    <div className="-mt-8 flex z-10 flex-col justify-center items-center self-center font-black whitespace-nowrap bg-teal-500 rounded-full h-[69px] leading-[120%] w-[69px]">
      {icon}
    </div>
    <div className="mt-3 py-3 max-w-full text-center">{label}</div>
  </div>
);

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <Link className="group" href={href}>
    {text}
    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
  </Link>
);

const footerLinks = [
  { href: "/", text: "Home" },
  { href: "/services", text: "Our Services" },
  { href: "/team", text: "Our Team" },
  { href: "/contact", text: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-96 w-full bg-neutral-800 max-md:mt-10 max-md:max-w-full border border-red-500">
      <div className="z-10 -mt-64 w-full max-w-[1440px] max-md:mt-0 max-md:max-w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6626.520828333342!2d151.031234!3d-33.857179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcbbb7921269%3A0xe180391903a20214!2sErsoy%20Kumsuz%20Dental%20Surgeon!5e0!3m2!1sen!2sau!4v1716107766625!5m2!1sen!2sau"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="mb-5 mt-28 w-full max-w-[1440px] max-md:mt-20 max-md:max-w-full">
        <div className="flex justify-center gap-5 items-stretch max-md:flex-col max-md:gap-14">
          <IconCard icon={<FaMap size={30} />} label="153 Auburn Rd, Auburn" />
          <IconCard
            icon={<MdMailOutline size={30} />}
            label="info@drersoykumsuz.com.au"
          />
          <IconCard icon={<FaPhone size={27} />} label="(02) 9749 2581" />
          <IconCard
            icon={<IoTimeOutline size={30} />}
            label="Monday to Saturday 9.00am-4.00pm"
          />
        </div>
      </div>

      <nav className="flex justify-center gap-24 mt-20 max-w-full text-lg text-white max-md:flex-wrap max-md:mt-10">
        {footerLinks.map((link, index) => (
          <FooterLink key={index} href={link.href} text={link.text} />
        ))}
      </nav>
      <div className="text-center self-stretch px-16 py-7 mt-20 w-full text-lg text-white bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        © Copyright 2017. All Rights Reserved - Dr Ersoy Kumsuz
      </div>
    </footer>
  );
};

export default Footer;
