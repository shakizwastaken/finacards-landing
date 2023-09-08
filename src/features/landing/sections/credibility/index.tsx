import LandingCredibilityCard from "./card";
import LandingCredibilityItems from "./items";

export default function LandingCredibility() {
  return (
    <section className="flex flex-col items-center justify-center md:py-8 ">
      <LandingCredibilityCard />
      <LandingCredibilityItems />
      {/* 
              eslint-disable-next-line @next/next/no-img-element
          */}
      {/* <img
        src="/assets/globe.png"
        alt="finacards.ma credit-card preview"
        className="-my-[5%] h-[50%] w-[50%]"
      /> */}
    </section>
  );
}
