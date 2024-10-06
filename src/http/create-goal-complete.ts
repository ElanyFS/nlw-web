
export async function createGoalCompletion(goalId:string) {
    const token = localStorage.getItem('token');

    if(!token){
        throw new Error("Usuário não tem permissão")
    }

    await fetch('https://goals-server-api.onrender.com/goal-completion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Beader ${token}`
            
        },
        body: JSON.stringify({
            goalId
        })
    })
}