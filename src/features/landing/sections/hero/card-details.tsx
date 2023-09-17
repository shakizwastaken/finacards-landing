import Button from "@/components/ui/button";
import { forwardRef } from "react";

export default forwardRef<
  HTMLDivElement,
  {
    title: string;
    description: string;
  }
>(function LandingHeroCardDetails({ title, description }, ref) {
  return (
    <div ref={ref}>
      <div className="flex w-full flex-col items-start justify-start gap-4 py-8 pl-0 md:h-screen md:w-[45vw] md:pl-2 lg:pl-0">
        <h1>{title}</h1>
        <p className="text-xs text-secondary lg:text-base">{description}</p>
        <Button className="text-sm md:text-base">Telcharger le document</Button>
      </div>
    </div>
  );
});
