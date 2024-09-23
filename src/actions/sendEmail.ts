"use server";

import { FormFields } from "@/app/components/ContactForm";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormFields) => {
  const emailRecipient = process.env.EMAIL_RECIPIENT;
  if (!emailRecipient)
    return { success: false, error: "Email recipient not found" };

  console.log("sending email to", emailRecipient);

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: emailRecipient,
      subject: formData.subject,
      text: `
        Sender Name: ${formData.firstName} ${formData.lastName}
        Sender Phone: ${formData.phone}
        Sender Email: ${formData.email}

        Message: ${formData.message}
      `,
    });
    console.log(data);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};
