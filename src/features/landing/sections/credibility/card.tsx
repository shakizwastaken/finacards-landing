export default function LandingCredibilityCard() {
  return (
    <div className="relative flex max-w-[90vw] flex-col items-center justify-center gap-8 overflow-hidden rounded-xl border-1 border-border-subtle bg-card p-8 pb-0 text-card-foreground md:container sm:gap-0 md:mx-auto md:p-20">
      <h2 className="z-1 text-center text-xl font-black sm:text-4xl md:text-7xl">
        20 ans d{"'"}experience, <br /> 100% de clients satisfaits.
      </h2>

      {/* 
            eslint-disable-next-line @next/next/no-img-element
        */}
      <img
        src="/assets/credit-cards/card-2.png"
        alt="finacards.ma credit-card preview"
        className="absolute w-[50%] translate-y-[75%] md:translate-y-[55%]"
      />

      {/* 
              eslint-disable-next-line @next/next/no-img-element
          */}
      <img
        src="/assets/credit-cards/card-2.png"
        alt="finacards.ma credit-card preview"
        className="invisible h-[50%] w-[50%]"
      />
    </div>
  );
}
