import Button from "@/components/ui/button";
import NavbarLayout from "@/layouts/navbar";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

export default function ContactUsSuccessPage() {
  return (
    <NavbarLayout className="flex h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center gap-4 text-center">
      <CheckCircleIcon className="h-[50%] w-[50%] text-primary" />
      <p className="text-lg font-bold text-primary md:text-3xl">
        Votre message a bien été envoyé !
      </p>
      <Link href={"/"}>
        <Button size="lg">Revenir à l'accueil</Button>
      </Link>
    </NavbarLayout>
  );
}
