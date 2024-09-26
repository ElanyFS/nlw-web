import logo from "../assets/Frame1.svg";
import letsStart from "../assets/lets-start.svg";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";

import { DialogTrigger } from "./ui/dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="" />
      <p className="text-zinc-300 text-base max-w-80 leading-relaxed text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
