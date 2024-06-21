"use client";

import React, { ReactNode, useState } from "react";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { NavLink } from "@/app/components";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";

const InstagramIcon = () => (
  <div
    className="flex justify-center items-center px-2.5 my-auto text-xl leading-4 text-center text-white whitespace-nowrap bg-teal-500 rounded-full h-[38px] w-[38px]"
    role="button"
    tabIndex={0}
  >
    <FaInstagram />
  </div>
);

interface ContactInfoProps {
  icon: ReactNode;
  info: string;
}

const ContactInfo = ({ icon, info }: ContactInfoProps) => (
  <div className="flex items-center gap-3">
    <div className="my-auto">{icon}</div>
    <div className="flex-auto text-xl font-bold">{info}</div>
  </div>
);

const NavLinks = () => (
  <>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/services">Our Services</NavLink>
    <NavLink href="/team">Our Team</NavLink>
    <NavLink href="/contact">Contact Us</NavLink>

    <div className="max-lg:hidden" role="button" tabIndex={0}>
      <InstagramIcon />
    </div>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex flex-col items-center w-full bg-aqua-secondary">
      {/* First part of navbar with contact info */}
      <section className="flex flex-wrap justify-around gap-5 px-16 py-4 w-full text-white bg-teal-500 max-md:px-5 max-md:max-w-full">
        <ContactInfo
          icon={<MdMailOutline size={28} />}
          info="info@drersoykumsuz.com.au"
        />
        <ContactInfo
          icon={<FaPhone size={24} />}
          info="(02) 97492581 / 0426845041"
        />
        <ContactInfo
          icon={<IoTimeOutline size={30} />}
          info="Opening hours: Monday to Saturday 9.00am-4.00pm"
        />
      </section>

      {/* Bottom part of navbar with Logo + Links */}
      <section className="py-3 px-8 flex items-center justify-between w-full max-w-[1449px] max-md:flex-wrap max-md:max-w-full bg-aqua-secondary">
        <div className="sm:hidden rounded-full overflow-hidden bg-white">
          <Image src="/small_logo.png" alt="Logo" width={77} height={77} />
        </div>
        <Image
          src="/big_logo.png"
          alt="Logo"
          width={396}
          height={198}
          className="hidden sm:block"
        />
        <nav className="hidden lg:flex gap-12 items-center max-md:flex-wrap">
          <NavLinks />
        </nav>

        <div
          className="lg:hidden cursor-pointer flex items-center gap-8"
          onClick={toggleMenu}
        >
          {isOpen ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
          <InstagramIcon />
        </div>
      </section>
      {isOpen && (
        <>
          <nav className="mt-5 flex flex-col gap-8 items-center pb-4">
            <NavLinks />
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
