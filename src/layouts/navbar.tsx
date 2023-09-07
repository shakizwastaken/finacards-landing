import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function NavbarLayout({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Navbar />
      <div className={cn("min-h-full w-full", className)} {...props}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
