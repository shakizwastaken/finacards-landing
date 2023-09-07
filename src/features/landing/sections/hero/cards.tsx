import { cn } from "@/lib/utils";

export default function LandingHeroCards() {
  const alt = "";

  return (
    <div className="container relative flex h-full items-center justify-center py-8 md:mb-[15%] [&>*]:max-h-[200px] md:[&>*]:max-h-[50vw] ">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={cn(
          "absolute z-0",
          true && "origin-bottom-left translate-y-[20%] -rotate-[35deg]"
        )}
        src="/assets/credit-cards/rotated/card-2.png"
        alt={alt}
      />

      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="z-1"
        src="/assets/credit-cards/rotated/card-3.png"
        alt={alt}
      />

      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={cn(
          "absolute z-2",
          true && "origin-bottom-right translate-y-[20%] rotate-[35deg]"
        )}
        src="/assets/credit-cards/rotated/card-1.png"
        alt={alt}
      />
    </div>
  );
}
