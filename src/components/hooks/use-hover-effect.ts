import { useEffect, useRef } from "react";

export default function useHoverEffect() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const curr = ref.current;
    if (!curr) return;

    if (curr.classList.contains("card")) {
      const rect = curr.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      curr.style.setProperty("--mouse-x", `${x}px`);
      curr.style.setProperty("--mouse-y", `${y}px`);
      return;
    } else if (curr.classList.contains("cards")) {
      Array.from<HTMLDivElement>(
        //@ts-ignore
        curr.getElementsByClassName("card") as HTMLDivElement[]
      ).forEach((el) => {
        const rect = el.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        el.style.setProperty("--mouse-x", `${x}px`);
        el.style.setProperty("--mouse-y", `${y}px`);
      });
    }
  };

  useEffect(() => {
    const curr = ref.current;
    if (!curr) return;
    ref.current.addEventListener("mousemove", handleMouseMove);
    return () => curr.removeEventListener("mousemove", handleMouseMove);
  }, [ref]);

  return ref;
}
