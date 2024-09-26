import { Dialog } from "./component/ui/dialog";
import { CreateGoal } from "./component/create-goals";
import { Summary } from "./component/summary";
import { EmptyGoals } from "./component/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";

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
  );
}
