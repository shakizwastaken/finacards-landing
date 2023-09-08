import { StyleHTMLAttributes, useEffect, useRef, useState } from "react";
import { CardProps } from ".";

import { cn } from "@/lib/utils";

export default function LandingServicesCard({ ...card }: CardProps) {
  const Icon = card.icon;

  return (
    <div
      className={cn(
        "card relative flex h-full w-full flex-col items-start gap-2 overflow-hidden rounded-md border-1 border-border-subtle bg-card p-6 text-start text-card-foreground md:h-[250px] md:w-[30%]"
      )}
    >
      <div className="mb-4 flex w-fit items-center justify-start rounded-md bg-card-foreground p-2 text-card">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold">{card.title}</h3>
      <p className="text-base text-secondary">{card.description}</p>
    </div>
  );
}
