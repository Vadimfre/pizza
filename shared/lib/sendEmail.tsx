import { Resend } from "resend";
import { PayOrderTemplate } from "../components/shared/email-templates/pay-order";

export const sendEmail = (
  to: string,
  subject: string,
  template: React.ReactNode
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return resend.emails.send({
    from: "Semapizza@resend.dev",
    to,
    subject,
    react: template,
  });
};
