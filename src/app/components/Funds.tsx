import React from "react";
import Image from "next/image";

interface FundLogoProps {
  logo_number: number;
}

const FundLogo: React.FC<FundLogoProps> = ({ logo_number }) => (
  <div className="flex justify-center max-w-none bg-aqua-thirdary py-6 px-16">
    <Image
      src={`/fund_logos/fund_logo_${logo_number}.png`}
      width={150}
      height={150}
      alt="fund logo"
      className="max-w-none"
    />
  </div>
);

interface ScrollingRowProps {
  row_num: number;
  reverse: boolean;
}

const ScrollingRow: React.FC<ScrollingRowProps> = ({ row_num, reverse }) => {
  let offset;
  if (row_num === 1) {
    offset = 1;
  } else if (row_num === 2) {
    offset = 15;
  } else {
    offset = 29;
  }

  const shouldAnimate = true;

  let animation = reverse
    ? "animate-loop-scroll-reverse"
    : "animate-loop-scroll";

  animation = shouldAnimate ? animation : "";

  return (
    <div className="flex overflow-hidden">
      <div className={`flex space-x-16 ${animation}`}>
        {Array.from({ length: 14 }, (_, i) => i + offset).map((logo_number) => (
          <FundLogo key={logo_number} logo_number={logo_number} />
        ))}
      </div>
      <div className={`flex space-x-16 ${animation}`} aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => i + offset).map((logo_number) => (
          <FundLogo key={logo_number} logo_number={logo_number} />
        ))}
      </div>
    </div>
  );
};

const Funds = () => {
  return (
    <>
      <h2 className="self-center mt-32 mb-14 text-5xl text-center text-teal-500 leading-[60px] w-[667px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        On the spot claims for the following health funds:
      </h2>
      <div className="flex flex-col space-y-10 w-full">
        <ScrollingRow row_num={1} reverse={false} />
        <ScrollingRow row_num={2} reverse={true} />
        <ScrollingRow row_num={3} reverse={false} />
      </div>
    </>
  );
};

export default Funds;
