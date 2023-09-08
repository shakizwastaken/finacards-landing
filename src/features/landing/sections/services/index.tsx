import LandingServicesCards from "./cards";

export default function LandingServices() {
  return (
    <section className="container flex h-max flex-col items-center justify-center gap-8 py-20 md:gap-20 md:py-16">
      <h2>Nos services</h2>
      <LandingServicesCards />
    </section>
  );
}
