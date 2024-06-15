import { ReactNode } from "react";
import Image from "next/image";
import PageLayout from "@/app/components/PageLayout";

interface TeamMemberProps {
  name: string;
  image: string;
  children: ReactNode;
}

const TeamMember = ({ name, image, children }: TeamMemberProps) => (
  <div className="flex max-lg:flex-col max-lg:items-center">
    <Image
      loading="lazy"
      src={image}
      height={400}
      width={400}
      alt={`${name}`}
      className="hover:scale-[1.03] transition duration-300 ease-in-out z-10"
    />
    <div className="bg-teal-500 flex flex-col justify-center max-lg:items-center py-10 px-10 pl-20 -m-10 max-lg:pt-20">
      <h2 className="text-3xl text-white mb-8">{name}</h2>
      <p className="text-white">{children}</p>
    </div>
  </div>
);

export default function Team() {
  return (
    <PageLayout title="Our Team">
      <div className="mt-32 max-md:mb-10 gap-36 flex flex-col container max-w-[80%]">
        <TeamMember name="Dr Ersoy Kumsuz (B.D.S)" image="/ek_headshot.jpg">
          Ersoy graduated in 1998 from the University of Sydney . He spent 4
          years in the Australian Defense Force as a full time Dental Officer
          based in Darwin, Sydney and East Timor before opening his own dental
          practice in Auburn in 2002.
          <br />
          <br />
          With 17 years of experience as a general dentist with special
          interests in wisdom teeth removal, implantology and non-extraction
          orthodontics and a keen interest in continuing education he is well
          equipped to provide first class dental treatment to his patients.
          Recently completing further studies with the International Association
          of Advanced Dentistry in the areas of implantology and orthodontics he
          is keen to offer these services at affordable prices.
          <br />
          <br />
          Outside of dentistry he is a happily married father of five young
          children that occupy most of his time and when he finds time his other
          passion in life is the sport of grappling or Brazilain Jiu Jitsu in
          which he has competed in the World Championships in 2009 and 2011 and
          2013 in Los Angeles California.
        </TeamMember>
        <TeamMember name="Dr Hiba Badreddine" image="/hiba.jpg">
          Dual qualified as both a pharmacist and dentist Dr Hiba strives for
          excellence in all aspects of dentistry. She has a particular gift in
          Endodontics(Root Canal) and her attention to detail is second to none.
          <br />
          <br />
          Outside dentistry her baking skills are unparalleled and her New York
          cheesecake is a delight.
        </TeamMember>
      </div>
    </PageLayout>
  );
}
