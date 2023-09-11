import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import NavbarLayout from "@/layouts/navbar";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { SendHorizontalIcon } from "lucide-react";
import { useRouter } from "next/router";

export default function ContactUsPage() {
  const router = useRouter();

  const formSchema = z.object({
    business: z.string().min(2),
    title: z.enum(["Mr", "Mme", "Mlle"]),
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);

    router.push("/contact-us/success");
  });

  return (
    <NavbarLayout className="container flex min-h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center gap-12 py-24">
      <div className="flex w-full flex-col text-start">
        <h1>
          Bonjour👋,
          <br />
          Parlons de votre projet!
        </h1>
        <p className="text-secondary md:text-lg">
          Vous avez un projet ? Vous souhaitez en discuter avec nous ? Nous
          sommes à votre écoute.
        </p>
      </div>

      <Form {...form}>
        <form
          className="flex w-full flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center [&>*]:w-full">
            <FormField
              control={form.control}
              name="business"
              render={({ field }) => (
                <FormItem className="flex-1 md:flex-[50%]">
                  <FormLabel>Entreprise</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre entreprise..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Quel est le nom de votre entreprise ?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 md:flex-[50%]">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre email..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Comment voulez-vous qu'on vous contacte ?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center [&>*]:w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1 md:flex-[50%]">
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Comment voulez-vous qu'on vous appelle ?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-1 md:flex-[50%]">
                  <FormLabel>Civilité</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Votre civilité..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Mr">Mr</SelectItem>
                        <SelectItem value="Mme">Mme</SelectItem>
                        <SelectItem value="Mlle">Mlle</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Comment voulez-vous qu'on vous appelle ?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1 md:flex-[50%]">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Votre message..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full items-center justify-start">
            <Button
              size={"lg"}
              className="flex w-full items-center gap-2 text-center sm:w-fit"
            >
              <p>Envoyer</p>
              <SendHorizontalIcon className="max-h-[50%]" />
            </Button>
          </div>
        </form>
      </Form>
    </NavbarLayout>
  );
}
