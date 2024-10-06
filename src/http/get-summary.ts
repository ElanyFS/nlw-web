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
  const token = localStorage.getItem('token')

  if (!token) {
    throw new Error('Usuário não tem permissão')
  }

  const response = await fetch(
    'https://goals-server-api.onrender.com/week-summary',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const data = await response.json()

  return data.summary
}
