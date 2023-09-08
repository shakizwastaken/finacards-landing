import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function LandingHeroCards() {
  const startAnimationAtPercentage = 25;

  const [isMobile] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
  );

  const ref = useRef<HTMLImageElement>(null);
  const calcPercentage = () => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top;

      let height = ref.current.getBoundingClientRect().height;
      if (!isMobile) height /= 100 / startAnimationAtPercentage;
      //if mobile start earlier
      else height *= 100 / (startAnimationAtPercentage * 1.5);

      const value = (top / height) * 100;
      return value > 100 ? 0 : value > 0 ? Math.abs(value - 100) : 100;
    }

    return 0;
  };

  const [percentage, setPercentage] = useState(calcPercentage);

  const handleScroll: EventListener = () => {
    const entry = ref.current;
    if (!entry) return;

    setPercentage(calcPercentage());
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  const calcValueFromPercentage = (max: number) => (percentage * max) / 100;

  const alt = "";

  return (
    <div className="container relative flex h-full items-center justify-center py-8 md:mb-[15%] [&>*]:max-h-[200px] md:[&>*]:max-h-[50vw] ">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={cn("absolute z-0 origin-bottom-left")}
        src="/assets/credit-cards/rotated/card-2.png"
        alt={alt}
        style={{
          transform: `translateY(${calcValueFromPercentage(
            20
          )}%) rotate(-${calcValueFromPercentage(35)}deg)`,
        }}
      />

      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="z-1"
        src="/assets/credit-cards/rotated/card-3.png"
        alt={alt}
        ref={ref}
      />

      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={cn("absolute z-2 origin-bottom-right")}
        src="/assets/credit-cards/rotated/card-1.png"
        alt={alt}
        style={{
          transform: `translateY(${calcValueFromPercentage(
            20
          )}%) rotate(${calcValueFromPercentage(35)}deg)`,
        }}
      />
    </div>
  );
}
