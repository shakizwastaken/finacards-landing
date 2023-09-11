import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Cursor from "@/components/ui/cursor";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function NavbarLayout({
  children,
  className,
  dark = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  dark?: boolean;
}) {
  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, []);

  return (
    <>
      <div className="relative flex w-full flex-col items-center">
        <Navbar />
        <div className={cn("min-h-full w-full", className)} {...props}>
          {children}
        </div>
        <Footer />
      </div>
      <Cursor />
    </>
  );
}
