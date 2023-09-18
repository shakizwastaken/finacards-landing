import Button, { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";
import { forwardRef, useEffect, useState } from "react";

export default forwardRef<
  HTMLDivElement,
  {
    title: string;
    description: string;
  }
>(function LandingHeroCardDetails({ title, description }, ref) {
  const [open, setOpen] = useState(false);

  return (
    <div ref={ref}>
      <div className="flex w-full flex-col items-start justify-start gap-4 py-8 pl-0 md:h-screen md:w-[45vw] md:pl-2 lg:pl-0">
        <h1>{title}</h1>
        <p className="text-xs text-secondary lg:text-base">{description}</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            className={cn("text-sm md:text-base", buttonVariants())}
          >
            Recevoir plus d'info
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>M'envoyer plus de details sur cartes.</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-start justify-start gap-2 py-8">
              <Label className="flex items-center gap-1">Votre e-mail</Label>
              <Input placeholder="example@votre-email.ma" />
              <p className="text-xs text-secondary">
                Entrez votre e-mail pour recevoir plus d'infos sur les cartes
                finacards.ma
              </p>
            </div>

            <DialogFooter>
              <Button className="flex items-center gap-1">
                {" "}
                <MailIcon className="max-h-[75%]" />
                <span>Recevoir pdfs</span>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
});
