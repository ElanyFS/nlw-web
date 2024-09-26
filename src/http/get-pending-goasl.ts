// import { API } from "../service/api";

type PendingGoalsProps = {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;
}[]

export async function GetPendingGoals(): Promise<PendingGoalsProps> {
    const response = await fetch('https://goals-server-api.onrender.com/pending-goals')

    const data = await response.json()    

    return data.pendingGoals;
}