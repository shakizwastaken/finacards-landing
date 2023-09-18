import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import LandingHeroCardDetails from "./card-details";

export default function LandingHeroCards() {
  const startAnimationAtPercentage = 25;

  const [isMobile] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
  );

  const card_1 = useRef<HTMLImageElement>(null);
  const card_2 = useRef<HTMLImageElement>(null);
  const card_3 = useRef<HTMLImageElement>(null);

  const calcPercentage = () => {
    if (card_2.current) {
      const top = card_2.current.getBoundingClientRect().top;
      let height = card_2.current.getBoundingClientRect().height;
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
    const entry = card_2.current;
    if (!entry) return;

    setPercentage(calcPercentage());
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [card_2]);

  const calcValueFromPercentage = (max: number) => (percentage * max) / 100;

  const alt = "finacards.ma maroc finacards cartes bancaires afrique";

  const [details_container, isInView] = useInView({
    threshold: 0,
  });

  const [container_1, inView1] = useInView({
    threshold: 0.2,
    onChange: (e) => console.log(e, "1"),
  });
  const [container_2, inView2] = useInView({
    threshold: 0.1,
    onChange: (e) => console.log(e, "2"),
  });
  const [container_3, inView3] = useInView({
    threshold: 0.0,
    onChange: (e) => console.log(e, "3"),
  });

  return (
    <div className="container relative flex flex-col">
      <div className="pointer-events-none flex h-full items-center justify-center py-8 md:sticky md:top-0 md:mb-[15%] [&>*]:max-h-[200px] md:[&>*]:max-h-[50vw] ">
        <img
          id="card-1"
          className={cn(
            "absolute transition-all duration-300 ease-in-out",
            isInView && !isMobile ? "origin-center" : "origin-bottom-left",
            "z-0",
            isInView && !inView1 && !isMobile && "opacity-0"
          )}
          src="/assets/credit-cards/rotated/card-2.png"
          alt={alt}
          ref={card_1}
          style={{
            transform:
              isInView && !isMobile
                ? `rotate(90deg) translateY(50%) scale(0.7)`
                : `translateY(${calcValueFromPercentage(
                    20
                  )}%) rotate(-${calcValueFromPercentage(35)}deg)`,
          }}
        />

        {/*
          // translateY(${calculatePosition(
          //     container_1.current,
          //     card_1.current
          //   )}px) 
        */}

        <img
          id="card-2"
          className={cn(
            "transition-all duration-300 ease-in-out",
            "z-1",
            isInView && (!inView2 || inView1) && !isMobile && "opacity-0"
          )}
          src="/assets/credit-cards/rotated/card-3.png"
          alt={alt}
          ref={card_2}
          style={{
            transform:
              isInView && !isMobile
                ? `rotate(90deg) translateY(50%) scale(0.7)`
                : undefined,
          }}
        />

        <img
          id="card-3"
          className={cn(
            "absolute transition-all duration-300 ease-in-out",
            isInView && !isMobile ? "origin-center" : "origin-bottom-right",
            "z-2",
            isInView && (!inView3 || inView2) && !isMobile && "opacity-0"
          )}
          src="/assets/credit-cards/rotated/card-1.png"
          alt={alt}
          ref={card_3}
          style={{
            transform:
              isInView && !isMobile
                ? `rotate(90deg) translateY(50%) scale(0.7)`
                : `translateY(${calcValueFromPercentage(
                    20
                  )}%) rotate(${calcValueFromPercentage(35)}deg)`,
          }}
        />
      </div>

      <div
        ref={details_container}
        className="mb-[35%] flex w-full flex-col items-end justify-end px-2 md:container"
      >
        <LandingHeroCardDetails
          ref={container_3}
          title="Carte Biometrique"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptatemLorem ipsum
              dolor sit amet consectetur adipisicing elit..."
        />

        <LandingHeroCardDetails
          ref={container_2}
          title="Carte Metalique"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptatemLorem ipsum
              dolor sit amet consectetur adipisicing elit..."
        />

        <LandingHeroCardDetails
          ref={container_1}
          title="Carte PVC"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptatemLorem ipsum
              dolor sit amet consectetur adipisicing elit..."
        />
      </div>
    </div>
  );
}
