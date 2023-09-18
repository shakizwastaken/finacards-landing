import partners from "./partners";

export default function LandingPartners() {
  const mapPartners = () =>
    partners.map((Partner, i) => <Partner key={i} fill="white" />);

  return (
    <section
      id="partners"
      className="container flex items-center justify-center gap-12 overflow-hidden py-20 md:py-16 [&>*]:max-h-[40px] [&>*]:w-fit [&>*]:object-contain md:[&>*]:max-h-[75px]"
    >
      {mapPartners()}
    </section>
  );
}
