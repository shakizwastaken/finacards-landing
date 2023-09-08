import { LayersIcon, SmartphoneCharging, type LucideIcon } from "lucide-react";
import LandingServicesCard from "./card";
import { cn } from "@/lib/utils";
import useHoverEffect from "@/components/hooks/use-hover-effect";

export interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const servicesCards: CardProps[] = [
  {
    icon: LayersIcon,
    title: "Production de Cartes",
    description: "Fourniture et personnalisation des cartes.",
  },
  {
    icon: SmartphoneCharging,
    title: "Offre Digitale",
    description:
      "Sécurisation des solutions mobilesSécurisations des transactions électroniques.",
  },
  {
    icon: LayersIcon,
    title: "Production de Cartes",
    description: "Fourniture et personnalisation des cartes.",
  },
  {
    icon: LayersIcon,
    title: "Production de Cartes",
    description: "Fourniture et personnalisation des cartes.",
  },
  {
    icon: LayersIcon,
    title: "Production de Cartes",
    description: "Fourniture et personnalisation des cartes.",
  },
  {
    icon: LayersIcon,
    title: "Production de Cartes",
    description: "Fourniture et personnalisation des cartes.",
  },
  {
    icon: LayersIcon,
    title: "Production de Cartes",
    description: "Fourniture et personnalisation des cartes.",
  },
];

export default function LandingServicesCards() {
  const ref = useHoverEffect();
  return (
    <div
      ref={ref}
      className={cn(
        "cards flex max-w-full flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap"
      )}
    >
      {servicesCards.map((card, index) => (
        <LandingServicesCard key={index} {...card} />
      ))}
    </div>
  );
}
