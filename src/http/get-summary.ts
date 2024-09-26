// import { API } from '../service/api'

type SummaryProps = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryProps> {
  const response = await fetch('https://goals-server-api.onrender.com/week-summary')
  const data = await response.json()  

  return data.summary
}
