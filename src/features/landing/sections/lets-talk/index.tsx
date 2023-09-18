import useHoverEffect from "@/components/hooks/use-hover-effect";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function LandingLetsTalk() {
  const ref = useHoverEffect();

  return (
    <section
      ref={ref}
      className="card card-solo container relative flex max-w-[90vw] flex-col-reverse items-center rounded-md border-1 border-border-subtle bg-card px-12 pt-8 text-card-foreground md:mx-auto md:flex-row"
    >
      {/* 
        eslint-disable-next-line @next/next/no-img-element
      */}
      <img
        src="/assets/credit-cards/group.png"
        alt="credit card image / finacards.ma"
        className="pointer-events-none invisible mt-[20%] md:mt-0 md:max-w-[50%]"
      />

      {/* 
        eslint-disable-next-line @next/next/no-img-element
      */}
      <img
        src="/assets/credit-cards/group.png"
        alt="credit card image / finacards.ma"
        className="pointer-events-none absolute bottom-0 mx-auto md:max-w-[50%]"
      />

      <div className="flex flex-col items-start justify-center space-y-4 text-start md:space-y-6">
        <h2 className="mtext-4xl font-bold md:text-6xl">
          Parlons de votre projet!
        </h2>
        <p className="text-base text-secondary md:text-lg">
          Vous avez un projet ? Vous souhaitez en discuter avec nous ? Nous
          sommes à votre écoute.
        </p>
        <Link href={"/contact-us"}>
          <Button>Contactez nous</Button>
        </Link>
      </div>
    </section>
  );
}
