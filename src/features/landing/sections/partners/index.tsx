import partners from "./partners";

export default function LandingPartners() {
  const mapPartners = () =>
    partners.map((Partner, i) => (
      // eslint-disable-next-line @next/next/no-img-element
      // <Partner
      // className="w-fit md:flex-shrink [&>*]:fill-foreground"
      // src={Partner}
      // key={i}
      // alt="a partner of finacards.ma"
      // />
      <Partner key={i} fill="white" />
    ));

  return (
    <section
      id="partners"
      className="container flex items-center justify-center gap-12 overflow-hidden py-20 md:py-16"
    >
      {mapPartners()}
    </section>
  );
}
