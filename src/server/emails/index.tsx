import { env } from "@/env.mjs";
import nodemailer from "nodemailer";
import emails, { Email, EmailProps } from "./emails";
import { render } from "@react-email/render";
import path from "path";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: env.SMTP_LOGIN,
    pass: env.SMTP_PASSWORD,
  },
});

export default transporter;

export async function sendEmail<T extends Email>(
  type: T,
  props: EmailProps<T>,
  to: string | string[]
) {
  const Email = emails[type];

  return await transporter.sendMail({
    // @ts-ignore
    html: render(<Email {...props} />),
    to,
    from: env.SMTP_FROM,
    cc: env.SMTP_TO.split(","),
    attachments: [
      {
        filename: "carte_biometrique.pdf",
        path: "public/assets/card-details/carte_biometrique.pdf",
      },
      {
        filename: "carte_metalique.pdf",
        path: "public/assets/card-details/carte_metalique.pdf",
      },
      {
        filename: "carte_pvc.pdf",
        path: "public/assets/card-details/carte_pvc.pdf",
      },
    ],
  });
}
