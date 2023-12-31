import SwitchMode from "@/components/ui/switch-mode";
import Cursor from "@/components/ui/cursor";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function NavbarLayout({
  children,
  className,
  dark = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  dark?: boolean;
}) {
  return (
    <>
      <div className="relative flex w-full flex-col items-center">
        <SwitchMode defaultValue={dark} />
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
