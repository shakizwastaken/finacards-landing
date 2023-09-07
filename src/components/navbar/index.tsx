import Link from "next/link";
import Button from "../ui/button";
import Logo from "../ui/logo";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-navbar w-full items-center justify-center bg-background">
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex [&>*]:text-secondary">
          <Link className="hover:brightness-125" href={"#"}>
            Nos partenaires
          </Link>
          <Link className="hover:brightness-125" href={"#"}>
            Qui sommes-nous ?
          </Link>
          <Link className="hover:brightness-125" href={"#"}>
            Nos services
          </Link>
        </div>

        <Button className="hidden md:block" variant={"outline"}>
          Contactez nous
        </Button>

        <MenuIcon className="md:hidden" />
      </div>
    </header>
  );
}
