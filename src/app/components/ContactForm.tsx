"use client";

import React from "react";
import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

interface InputGroupProps {
  register: UseFormRegister<FormFields>;
  label: string;
  id: keyof FormFields;
  placeholder: string;
  isTextArea?: boolean;
}

const InputGroup = ({
  label,
  id,
  placeholder,
  isTextArea,
  register,
}: InputGroupProps) => {
  return (
    <div className="flex flex-col w-full mb-12">
      <label className="font-bold mb-5" htmlFor={id}>
        {label}
      </label>
      {!!isTextArea ? (
        <textarea
          {...register(id)}
          className="grow justify-center items-start p-6 pb-20 bg-white border border-solid border-stone-300 focus:border-teal-500 focus:outline-none"
          id={id}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(id)}
          className="grow justify-center items-start p-6 bg-white border border-solid border-stone-300 focus:border-teal-500 focus:outline-none"
          type="text"
          id={id}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form
      className="flex flex-col self-center px-5 pb-5 mt-24 max-w-full text-lg bg-teal-500 text-zinc-800 w-[1433px] max-md:mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col z-10 items-center px-48 py-20 -mt-3 bg-white border border-solid shadow-sm border-neutral-200 max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between w-full gap-10 max-sm:flex-wrap">
          <InputGroup
            label="First name"
            id="firstName"
            placeholder="Enter First name"
            register={register}
          />
          <InputGroup
            label="Last name"
            id="lastName"
            placeholder="Enter Last name"
            register={register}
          />
        </div>
        <div className="flex justify-between w-full gap-10 max-sm:flex-wrap">
          <InputGroup
            label="Email"
            id="email"
            placeholder="Enter Email address"
            register={register}
          />
          <InputGroup
            label="Phone"
            id="phone"
            placeholder="Enter phone number"
            register={register}
          />
        </div>
        <InputGroup
          label="Subject"
          id="subject"
          placeholder="Enter the subject of your inquiry"
          register={register}
        />
        <InputGroup
          label="Message"
          id="message"
          placeholder="Type your message here"
          isTextArea={true}
          register={register}
        />
        <button
          className="justify-center px-14 py-6 mt-11 text-lg text-white bg-teal-500 max-md:px-5 max-md:mt-10 hover:scale-95 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:scale-100"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
