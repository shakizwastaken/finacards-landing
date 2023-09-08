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
    title: "Fidélité",
    description: "Offre globale de gestion de la fidélité.",
  },
  {
    icon: LayersIcon,
    title: "Chéquiers et LCN",
    description:
      "Personnalisation des chéquiers, lettre de change et tout document sécurisé.",
  },
  {
    icon: LayersIcon,
    title: "Éditique et Impression",
    description:
      "Traitement des factures, relevés et tout document ou lettre d'information aux clients impression en couleur HD.",
  },
  {
    icon: LayersIcon,
    title: "ProductionCall Center",
    description:
      "Gestion de tout type d'appels (Entrants, Sortants, VAD, CRC, SAV, etc.).",
  },
  {
    icon: LayersIcon,
    title: "Gestion électronique des documents",
    description:
      "Archivage des documents,Flux et processus,Software et Hardware.",
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
