import Image from "next/image";
import PageLayout from "@/app/components/PageLayout";
import { services } from "@/content";
import { ServiceImage } from "@/types";

interface ServiceSectionProps {
  title: string;
  text: string;
  images: ServiceImage[];
}

const ServiceSection = ({ title, text, images }: ServiceSectionProps) => (
  <section className="flex flex-col self-center px-3 pt-2 sm:px-7 sm:pt-6 w-full bg-teal-500 max-w-[85%] mb-20">
    <div className="z-10 px-16 py-20 mb-0 bg-white shadow-md max-md:px-5 max-md:mb-2.5">
      <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
        <article className="flex flex-col w-[60%] max-lg:w-full max-lg:mb-10">
          <h2 className="text-3xl text-teal-500">{title}</h2>
          <p className="mt-7 text-base leading-8 text-zinc-800">{text}</p>
        </article>
        <div className="flex flex-col gap-8 ml-5 w-[40%] max-lg:ml-0 max-lg:w-full">
          {images.map((image) => (
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt}
              className="w-full mix-blend-multiply"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function Services() {
  return (
    <PageLayout title="Services">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a78d3cad9a6964397fe84cf45f5938ea509c0a28ced6a13931a99312da8aa9e?apiKey=1c365991cad646539ab14038066c3ab4&"
        alt="Services overview"
        className="mt-12 mb-20 w-full max-md:mt-10 max-md:max-w-full"
      />
      {services.map((service) => (
        <ServiceSection
          key={service.name}
          title={service.name}
          text={service.description}
          images={service.images}
        />
      ))}
    </PageLayout>
  );
}
