import Button from "@/components/ui/button";

export default function LandingLetsTalk() {
  return (
    <div className="container relative mb-8 flex max-w-[90vw] flex-col-reverse items-center rounded-md border-1 border-border-subtle bg-card px-12 text-card-foreground md:mx-auto md:mb-16 md:flex-row">
      {/* 
        eslint-disable-next-line @next/next/no-img-element
      */}
      <img
        src="/assets/credit-cards/group.png"
        alt="credit card image / finacards.ma"
        className="invisible md:max-w-[50%] "
      />

      {/* 
        eslint-disable-next-line @next/next/no-img-element
      */}
      <img
        src="/assets/credit-cards/group.png"
        alt="credit card image / finacards.ma"
        className="absolute bottom-0 mx-auto md:max-w-[50%]"
      />

      <div className="flex flex-col items-start justify-center space-y-4 text-start md:space-y-6">
        <h2 className="mtext-4xl font-bold md:text-6xl">
          Parlons de votre projet!
        </h2>
        <p className="text-base text-secondary md:text-lg">
          Vous avez un projet ? Vous souhaitez en discuter avec nous ? Nous
          sommes à votre écoute.
        </p>
        <Button>Contactez nous</Button>
      </div>
    </div>
  );
}
