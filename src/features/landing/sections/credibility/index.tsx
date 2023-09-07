import LandingCredibilityCard from "./card";
import LandingCredibilityItems from "./items";

export default function LandingCredibility() {
  return (
    <div className="flex flex-col items-center justify-center md:py-8 ">
      <LandingCredibilityCard />
      <LandingCredibilityItems />
    </div>
  );
}
