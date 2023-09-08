import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Cursor({ className }: { className?: string }) {
  const [{ x, y }, setCords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCords({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 top-0 -z-2 hidden transform rounded-full bg-card blur-3xl transition-transform duration-300 ease-linear md:block ",
        className
      )}
      style={{
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        width: 300,
        height: 300,
      }}
    />
  );
}
