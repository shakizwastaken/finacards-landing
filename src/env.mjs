import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),

    SMTP_HOST: z.string(),
    SMTP_PORT: z.number().default(465),
    SMTP_LOGIN: z.string(),
    SMTP_PASSWORD: z.string(),

    SMTP_FROM: z.string().email(),
    SMTP_TO: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,

    SMTP_HOST: process.env.SMTP_HOST,

    //@ts-ignore
    SMTP_PORT: Number(process.env.SMTP_PORT || ""),
    SMTP_LOGIN: process.env.SMTP_LOGIN,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,

    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_TO: process.env.SMTP_TO,

    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
});
