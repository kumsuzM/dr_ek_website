"use client";

import { sendEmail } from "@/actions/sendEmail";
import React from "react";
import {
  RegisterOptions,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";

export type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  validation: string;
};

interface InputGroupProps {
  register: UseFormRegister<FormFields>;
  label: string;
  id: keyof FormFields;
  placeholder: string;
  isTextArea?: boolean;
  validation?: RegisterOptions;
  error?: string;
}

const InputGroup = ({
  register,
  label,
  id,
  placeholder,
  isTextArea,
  validation,
  error,
}: InputGroupProps) => {
  const sharedClasses =
    "justify-center items-start p-6 bg-white border border-solid border-stone-300 focus:border-teal-500 focus:outline-none";
  return (
    <div className="flex flex-col w-full mb-12">
      <label className="font-bold mb-5" htmlFor={id}>
        {label}
      </label>
      {!!isTextArea ? (
        <textarea
          {...register(id, validation)}
          className={`${sharedClasses} pb-20`}
          id={id}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(id, validation)}
          className={sharedClasses}
          type="text"
          id={id}
          placeholder={placeholder}
        />
      )}
      <span className="text-red-500 mt-2">{error || "\u00A0"}</span>
      {/* Non-breaking space as placeholder */}
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormFields>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const result = await sendEmail(data);

      if (result.success) {
        toast.success("Email sent successfully!");
        reset(); // Reset the form on successful submission
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
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
            validation={{
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
              },
            }}
            error={errors.firstName?.message}
          />
          <InputGroup
            label="Last name"
            id="lastName"
            placeholder="Enter Last name"
            register={register}
            validation={{
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
              },
            }}
            error={errors.lastName?.message}
          />
        </div>
        <div className="flex justify-between w-full gap-10 max-sm:flex-wrap">
          <InputGroup
            label="Email"
            id="email"
            placeholder="Enter Email address"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            }}
            error={errors.email?.message}
          />
          <InputGroup
            label="Phone"
            id="phone"
            placeholder="Enter phone number"
            register={register}
            validation={{
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Enter a valid phone number",
              },
            }}
            error={errors.phone?.message}
          />
        </div>
        <InputGroup
          label="Subject"
          id="subject"
          placeholder="Enter the subject of your inquiry"
          register={register}
          validation={{ required: "Subject is required" }}
          error={errors.subject?.message}
        />
        <InputGroup
          label="Message"
          id="message"
          placeholder="Type your message here"
          isTextArea={true}
          register={register}
          validation={{
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          }}
          error={errors.message?.message}
        />
        <button
          className="justify-center px-14 py-6 mt-11 text-lg text-white bg-teal-500 max-md:px-5 max-md:mt-10 hover:scale-95 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:scale-100"
          disabled={!isValid || isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
