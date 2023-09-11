import Link from "next/link";
import Button from "../ui/button";
import Logo from "../ui/logo";
import { MenuIcon } from "lucide-react";
import useHoverEffect from "../hooks/use-hover-effect";

export default function Navbar() {
  const ref = useHoverEffect();

  return (
    <header
      ref={ref}
      className="card card-solo sticky left-0 top-0 z-50 flex h-navbar w-full items-center justify-center border-b-1 border-b-border-subtle bg-background"
    >
      <div className="container flex items-center justify-between">
        <Logo className="max-h-[50%]" />

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex [&>*]:text-secondary">
          <Link className="hover:brightness-125" href={"/#services"}>
            Nos services
          </Link>
          <Link className="hover:brightness-125" href={"/#partners"}>
            Nos partenaires
          </Link>
          {/* <Link className="hover:brightness-125" href={"/contact-us"}>
            Nous-contacter
          </Link> */}
        </div>
        <Link href={"/contact-us"}>
          <Button className="hidden md:block" variant={"outline"}>
            Contactez nous
          </Button>
        </Link>

        <MenuIcon className="md:hidden" />
      </div>
    </header>
  );
}
