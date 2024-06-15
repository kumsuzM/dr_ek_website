import Image from "next/image";
import PageLayout from "@/app/components/PageLayout";
import { ContactForm } from "@/app/components";
import { useFormState } from "react-dom";

export default function Contact() {
  return (
    <PageLayout title="Contact Us">
      <Image
        loading="lazy"
        className="mt-12 w-full max-md:mt-10 max-md:max-w-full"
        alt="Reception area"
        src="/reception_1.png"
        width={1000}
        height={1000}
      />
      <ContactForm />
    </PageLayout>
  );
}
