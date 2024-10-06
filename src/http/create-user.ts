interface CreateUserRequest {
  name: string
  email: string
  password: string
}

export async function createUser({ name, email, password }: CreateUserRequest) {
  await fetch('https://goals-server-api.onrender.com/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
}
