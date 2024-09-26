// import { API } from "../service/api"

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency
}: CreateGoalRequest) {
  await fetch('https://goals-server-api.onrender.com/goal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency
    }),
  })
}
