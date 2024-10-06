interface LoginUserRequest {
  email: string
  password: string
}

export async function loginUser({ email, password }: LoginUserRequest) {
  const response = await fetch(
    'https://goals-server-api.onrender.com/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  )

  if (!response.ok) {
    throw new Error('Login failed')
  }

  const data = await response.json()

  if (data.success) {
    localStorage.setItem('token', data.token)

    return data.success
  }
}
