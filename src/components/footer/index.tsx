import Logo from "../ui/logo";

export default function Footer() {
  return (
    <footer className="card card-solo flex min-h-[20vh] w-full items-center justify-center bg-primary text-card-foreground">
      <div className="container flex h-full w-full flex-col items-center justify-start gap-12 py-8 md:flex-row md:gap-0 md:py-0 [&>*]:flex-[50%]">
        <div className="flex h-full flex-col items-start justify-start gap-4">
          <Logo
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            fill="var(--primary-foreground)"
            className="h-[25px] opacity-50"
          />
          <p className="text-sm opacity-50">
            Conçu et développé par FinaCards © 2017, Tous droits réservés.
          </p>
        </div>

        <div>
          <div className="text-sm opacity-50">
            <p>
              Adresse: Parc Industriel CFCIM, Lot 92, N 9، Bouskoura 20287,
              Maroc
            </p>
            <p> Email: commercial@finacards.ma </p>
            <p> Téléphone: + 212 5 22-92-56-81</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
