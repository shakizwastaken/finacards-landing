import LandingCredibilityItem, { type CredibilityItemProps } from "./item";

export default function LandingCredibilityItems() {
  const items: CredibilityItemProps[] = [
    {
      value: 300,
      label: "qui croient en nous.",
      currency: "clients",
    },
    {
      value: "2M",
      currency: "/an",
      label: "de cartes personnalisées.",
    },
    {
      value: 10,
      label: "d’expérience dans le domaine.",
      currency: "ans",
    },
    {
      value: "20",
      label: "servis chaque mois.",
      currency: "pays",
    },
  ] as const;

  const mapItems = () =>
    items.map((item, i) => <LandingCredibilityItem key={i} {...item} />);

  return (
    <div className="container flex flex-col items-center justify-center space-y-6 py-20 md:flex-row md:justify-between md:py-16">
      {mapItems()}
    </div>
  );
}
