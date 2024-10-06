
type PendingGoalsProps = {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;
}[]

export async function GetPendingGoals(): Promise<PendingGoalsProps> {
    const token = localStorage.getItem('token');

    if(!token){
        throw new Error("Usuário não tem permissão")
    }
    
    const response = await fetch('https://goals-server-api.onrender.com/pending-goals', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()    

    return data.pendingGoals;
}