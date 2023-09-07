export interface CredibilityItemProps {
  value: string | number;
  label: string;
  currency?: string;
  addPlus?: boolean;
}

export default function LandingCredibilityItem({
  addPlus = true,
  value,
  currency,
  label,
}: CredibilityItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <div className="flex items-center justify-center gap-1">
        <p className="text-4xl font-bold md:text-7xl">
          {" "}
          {addPlus && "+"} {value}
        </p>
        <p className="text-base font-bold md:text-4xl">{currency}</p>
      </div>
      <p className="text-secondary">{label}</p>
    </div>
  );
}
