import { LayersIcon, SmartphoneCharging, type LucideIcon } from "lucide-react";

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
  return (
    <div className="flex max-w-full flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap">
      {servicesCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            className="flex h-full w-full flex-col items-start gap-2 rounded-md border-1 border-border-subtle bg-card p-6 text-start text-card-foreground md:h-[250px] md:w-[30%]"
            key={index}
          >
            <div className="mb-4 flex w-fit items-center justify-start rounded-md bg-card-foreground p-2 text-card">
              <Icon />
            </div>{" "}
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-base text-secondary">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}
