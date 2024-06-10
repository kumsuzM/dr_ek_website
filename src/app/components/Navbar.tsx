import React, { ReactNode } from "react";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { NavLink } from "@/app/components";

interface ContactInfoProps {
  icon: ReactNode;
  info: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, info }) => (
  <div className="flex flex-auto gap-3 whitespace-nowrap">
    <div className="my-auto">{icon}</div>

    <div className="flex-auto text-xl font-bold">{info}</div>
  </div>
);

const Navbar = () => {
  return (
    <header className="flex flex-col items-center w-full bg-aqua-secondary">
      {/* First part of navbar with contact info */}
      <section className="flex justify-center items-center px-16 py-3.5 w-full text-white bg-teal-500 max-md:px-5 max-md:max-w-full">
        <div className="container flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full border border-black">
          <div className="flex gap-14 my-auto max-md:flex-wrap max-md:max-w-full border border-red-500">
            <ContactInfo
              icon={<MdMailOutline size={28} />}
              info="info@drersoykumsuz.com.au"
            />
            <ContactInfo
              icon={<FaPhone size={24} />}
              info="(02)97492581 / 0426845041"
            />
          </div>
          <div className="flex gap-1.5 text-base font-bold">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0261178289ce8063690bc863e097cb941f414bb2de46b3f75deb75786dfbc94?apiKey=1c365991cad646539ab14038066c3ab4&"
              alt="Opening hours"
              className="shrink-0 aspect-square w-[30px]"
            />
            <div className="flex-auto my-auto">
              Opening hours: Monday to Saturday 9.00am-4.00pm
            </div>
          </div>
        </div>
      </section>

      {/* Bottom part of navbar with Logo + Links */}
      <section className="py-3 flex items-center justify-between w-full max-w-[1449px] max-md:flex-wrap max-md:max-w-full bg-aqua-secondary">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0bdab3b6d030929a0bb4476d75e68e9137dc51db9ff19024476f658a8b91a95?apiKey=1c365991cad646539ab14038066c3ab4&"
          alt="Logo"
          className="self-start aspect-[5] w-[396px]"
        />
        <nav className="flex gap-12 items-start max-md:flex-wrap ">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Our Services</NavLink>
          <NavLink href="/team">Our Team</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>

        <div
          className="flex justify-center items-center px-2.5 my-auto text-xl leading-4 text-center text-white whitespace-nowrap bg-teal-500 rounded-full h-[38px] w-[38px]"
          role="button"
          tabIndex={0}
        >
          <FaInstagram />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
