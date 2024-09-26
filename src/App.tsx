import { Dialog } from "./component/ui/dialog";
import { CreateGoal } from "./component/create-goals";
import { Summary } from "./component/summary";
import { EmptyGoals } from "./component/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";
// import letStart from "./assets/lets-start.svg";
// import { Label } from "./component/ui/label";
// import { Input } from "./component/ui/input";
// import { Button } from "./component/ui/button";
// import { Mail, KeyRound, ArrowUpRight  } from "lucide-react";
// import { Separator } from "./component/ui/separator";

export default function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>

    // <div className="h-screen flex justify-center items-center">
    //   <div className="w-[60%] h-[65%] flex bg-slate-50 font-inter shadow-md shadow-slate-900 rounded-e-lg">
    //     <div className="flex-1 flex flex-col items-center justify-around p-2 bg-gradient">
    //       <h2 className="text-center">
    //         Bem vindo à nossa plataforma de gereciamento de metas!
    //       </h2>
    //       <img src={letStart} alt="" />

    //       <p className="text-center text-xs flex">
    //         Faça login agora e descubra como é fácil transformar seus sonhos em
    //         conquistas.
    //         <ArrowUpRight className="size-8"/>
    //       </p>
    //     </div>

    //     <div className="flex-1 flex flex-col justify-center gap-4 items-center">
    //       <h1 className="font-inter text-violet-600 font-bold text-2xl">ACCESS</h1>
    //       <form className="flex flex-col justify-between gap-3">
    //         <div className="flex flex-col gap-3">
    //           <div className="flex flex-col gap-2">
    //             <Label
    //               htmlFor="title"
    //               className="flex items-center gap-1 text-violet-600"
    //             >
    //               <Mail />
    //               E-mail:
    //             </Label>

    //             <Input
    //             className="bg-zinc-100"
    //               placeholder=""
    //               autoFocus
    //               id="title"
    //               // {...register("title")}
    //             />
    //           </div>

    //           <div className="flex flex-col gap-2">
    //             <Label htmlFor="title" className="text-violet-600 flex items-center gap-1">
    //               <KeyRound />
    //               Password: 
    //             </Label>

    //             <Input
    //             className="bg-zinc-100"
    //               placeholder=""
    //               autoFocus
    //               id="title"
    //               // {...register("title")}
    //             />
    //           </div>

    //           <Button className="flex-1">Login</Button>
    //         </div>
    //       </form>

          
    //     </div>
    //   </div>
    // </div>
  );
}
