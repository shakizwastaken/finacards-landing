import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { sendEmail } from "@/server/emails";

const emailRouter = createTRPCRouter({
  getCardDetails: publicProcedure
    .input(z.object({ email: z.string().email(), name: z.string() }))
    .mutation(async ({ input: { name, email } }) => {
      sendEmail("card_details", { name }, email);
      return { message: "email is sending" };
    }),
});

export default emailRouter;
