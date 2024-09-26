// import { API } from "../service/api";

export async function createGoalCompletion(goalId:string) {
    await fetch('https://goals-server-api.onrender.com/goal-completion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            goalId
        })
    })
}