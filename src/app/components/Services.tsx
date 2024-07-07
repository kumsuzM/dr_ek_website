import React from "react";

interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  src,
  title,
  description,
}) => (
  <div className="flex flex-col grow px-7 pt-20 w-full bg-teal-500 max-md:px-5 max-md:mt-5 max-md:max-w-full">
    <div className="flex z-10 flex-col items-center px-20 py-16 bg-white shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={src}
        alt={description}
        className="max-w-full mix-blend-multiply aspect-[1.96] w-[300px]"
      />
      <div className="text-center mt-9 text-3xl text-teal-500">{title}</div>
      <div className="self-stretch mx-3 mt-7 text-base leading-8 text-zinc-800 max-md:mr-2.5 max-md:max-w-full">
        {description}
      </div>
      <button className="justify-center px-14 py-6 mt-11 text-lg text-white bg-teal-500 max-md:px-5 max-md:mt-10 hover:scale-95 transition duration-300 ease-in-out">
        Learn More
      </button>
    </div>
  </div>
);

const Services = () => {
  // TODO: replace these services with the ones from the content.ts file
  // but cap the description and only use the first image
  const services = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0998bf8fe1d1b74c0c4c84c323042b6730f907dc869a59ae99619ab291b41777?apiKey=1c365991cad646539ab14038066c3ab4&",
      title: "Dental Implants",
      description:
        "Dental implants are a proven solution for people in good overall oral and systemic health who have lost one or more teeth due to periodontal disease, trauma or injury, or any other reason. Dental implants are artificial tooth roots that are inserted into the jawbone to replace missing teeth.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e951900701fcbf50d343650e7e8fe7962d1ddcdbbbc73365809898af6f8c0acf?apiKey=1c365991cad646539ab14038066c3ab4&",
      title: "Wisdom Tooth Extractions",
      description:
        "Wisdom teeth are the last teeth to erupt within the mouth. When they align properly and gum tissue is healthy, wisdom teeth do not have to be removed. Unfortunately, this does not generally happen. The extraction of wisdom teeth is necessary when they are prevented from properly erupting within the mouth.",
    },
  ];

  return (
    <>
      <h2 className="self-center mt-24 text-5xl text-center text-teal-500 leading-[60px] max-md:mt-10 max-md:text-4xl">
        Our Services
      </h2>
      <section className="self-center mt-12 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              src={service.src}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
