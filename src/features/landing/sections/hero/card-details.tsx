import Button, { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { api } from "@/utils/api";
import { MailIcon } from "lucide-react";
import { forwardRef, useState } from "react";

export default forwardRef<
  HTMLDivElement,
  {
    title: string;
    description: string;
  }
>(function LandingHeroCardDetails({ title, description }, ref) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  const [name, setName] = useState("");
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  const { mutate } = api.email.getCardDetails.useMutation({
    onSuccess() {
      toast({
        title: "Succès",
        description:
          "Un email vous a été envoyé, Cela peut prendre quelques minutes.",
      });
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!email) return;
    mutate({ email, name });
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-start justify-start gap-4 py-8 pl-0 md:h-screen md:w-[45vw] md:pl-2 lg:pl-0"
    >
      <h1>{title}</h1>
      <p className="text-xs text-secondary lg:text-base">{description}</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className={cn("text-sm md:text-base", buttonVariants())}>
          Recevoir plus d'info
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>M'envoyer plus de details sur cartes.</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-8">
            <div className="flex flex-col items-start justify-start gap-2 ">
              <Label className="flex items-center gap-1">
                Votre nom complet
              </Label>
              <Input onChange={handleNameChange} placeholder="Votre nom..." />
              <p className="text-xs text-secondary">
                Comment voulez-vous qu'on vous appelle ?
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2">
              <Label className="flex items-center gap-1">Votre e-mail</Label>
              <Input
                onChange={handleEmailChange}
                placeholder="example@votre-email.ma"
              />
              <p className="text-xs text-secondary">
                Entrez votre e-mail pour recevoir plus d'infos sur les cartes
                finacards.ma
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleSubmit} className="flex items-center gap-1">
              {" "}
              <MailIcon className="max-h-[75%]" />
              <span>Recevoir pdfs</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
});
