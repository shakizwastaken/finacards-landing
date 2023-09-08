import Button from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import LandingHeroCards from "./cards";

export default function LandingHero() {
  return (
    <section className="relative flex h-full min-h-screen flex-col">
      <div className="container flex min-h-[65vh] flex-col items-center justify-center gap-8 text-center">
        <div>
          <h1>
            Votre satisfaction <br className="block md:hidden" /> est au{" "}
            <br className="hidden md:block" /> centre de nos{" "}
            <br className="block md:hidden" /> priorités
          </h1>

          <p className="text-secondary">
            Simplifier l’expérience de votre client dans un environnement
            sécurise
          </p>
        </div>

        <Button
          variant={"default"}
          className="flex items-center justify-center gap-4 px-8 py-6 text-lg"
        >
          <p>Contactez nous</p>
          <ArrowRightIcon />
        </Button>
      </div>

      <LandingHeroCards />
      {/* 
      <div className="absolute bottom-0 left-0 -z-1 flex h-full w-full flex-col items-center justify-end self-center overflow-x-hidden">
        
        <img
          className="h-full translate-y-[10%] self-center object-cover"
          src="/assets/gradient.png"
          alt="gradient image"
        />
      </div> */}
    </section>
  );
}
