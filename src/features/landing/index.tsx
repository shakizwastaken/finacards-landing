import NavbarLayout from "@/layouts/navbar";
import LandingHero from "./sections/hero";
import LandingServices from "./sections/services";
import LandingPartners from "./sections/partners";
import LandingCredibility from "./sections/credibility";
import LandingLetsTalk from "./sections/lets-talk";

export default function LandingPage() {
  return (
    <NavbarLayout>
      
      <LandingHero />
      <LandingServices />
      <LandingPartners />
      <LandingCredibility />
      <LandingLetsTalk />
    </NavbarLayout>
  );
}
