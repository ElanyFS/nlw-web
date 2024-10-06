
interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency
}: CreateGoalRequest) {
  const token = localStorage.getItem('token');

    if(!token){
        throw new Error("Usuário não tem permissão")
    }

  await fetch('https://goals-server-api.onrender.com/goal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency
    }),
  })
}
