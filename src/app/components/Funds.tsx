import React from "react";
import Image from "next/image";

interface FundLogoProps {
  logo_number: number;
}

const FundLogo: React.FC<FundLogoProps> = ({ logo_number }) => (
  <div className="flex shrink-0 items-center justify-center bg-aqua-thirdary py-6 px-16 max-md:py-3 max-md:px-8">
    <Image
      src={`/fund_logos/fund_logo_${logo_number}.png`}
      width={150}
      height={88}
      alt="fund logo"
      className="h-[88px] w-[150px] max-w-none object-contain"
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

  const logos = Array.from({ length: 14 }, (_, i) => i + offset);

  // Each copy carries its own trailing gap (pr-16) so that translating by
  // exactly -100% lines the second copy up where the first started: a
  // seamless loop with no jump.
  return (
    <div className="flex overflow-hidden">
      {[false, true].map((hidden) => (
        <div
          key={String(hidden)}
          className={`flex shrink-0 gap-16 pr-16 motion-reduce:animate-none ${animation}`}
          aria-hidden={hidden || undefined}
        >
          {logos.map((logo_number) => (
            <FundLogo key={logo_number} logo_number={logo_number} />
          ))}
        </div>
      ))}
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
