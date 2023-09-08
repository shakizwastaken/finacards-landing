export default function LandingPartners() {
  const partners = [
    "/assets/partners/partner-1.svg",
    "/assets/partners/partner-5.svg",
    "/assets/partners/partner-3.svg",
    "/assets/partners/partner-4.svg",
    "/assets/partners/partner-5.svg",
    "/assets/partners/partner-3.svg",
  ];

  const mapPartners = () =>
    partners.map((partner, i) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="w-fit md:flex-shrink"
        src={partner}
        key={i}
        alt="a partner of finacards.ma"
      />
    ));

  return (
    <section className="container flex items-center justify-between gap-8 overflow-hidden py-20 md:py-16">
      {mapPartners()}
    </section>
  );
}
