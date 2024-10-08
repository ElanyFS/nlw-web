import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../http/create-user";
import { loginUser } from "../http/login-user";
import letStart from "../assets/lets-start.svg";
import { ArrowUpRight } from "lucide-react";
import { Input } from "../component/ui/input";
import { Button } from "../component/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const createUserForm = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const loginUserForm = z.object({
  email: z.string(),
  password: z.string(),
});

type CreateUserForm = z.infer<typeof createUserForm>;

type LoginUserForm = z.infer<typeof loginUserForm>;

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleCreateUser(data: CreateUserForm) {
    await createUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    resetCreateUser();
  }

  const {
    register: registerCreateUser,
    handleSubmit: handleCreateUserSubmit,
    reset: resetCreateUser,
  } = useForm<CreateUserForm>({
    resolver: zodResolver(createUserForm),
  });

  const {
    register: registerLoginUser,
    handleSubmit: handleLoginUserSubmit,
    reset: resetLoginUserSubmit,
  } = useForm<LoginUserForm>({
    resolver: zodResolver(loginUserForm),
  });

  async function handleLoginUser(data: LoginUserForm) {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await loginUser({
        email: data.email,
        password: data.password,
      });

      if (response) {
        resetLoginUserSubmit();
        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMessage('E-mail/Senha inválidos.')
    } finally{
      setIsLoading(false);
    }
  }

  const [login, setLogin] = useState(true);

  // Exibir formulario de login ou register
  function handleLogin(tipo: boolean) {
    setLogin(tipo);
  }
  // sm:w-[60%] h-[65%] flex sm:flex-row flex-col

  return (
    <div className="h-[98%] md:h-screen flex justify-center items-center py-3">
      <div className="bg-slate-50 font-inter shadow-md shadow-slate-900 rounded-e-lg w-[90%] h-auto flex flex-col md:flex-row md:w-[70%] lg:w-[60%]">
        <div className="flex-1 flex flex-col items-center justify-around p-2 bg-gradient">
          <h2 className="text-center">
            Bem vindo à nossa plataforma de gereciamento de metas!
          </h2>
          <img src={letStart} alt="" className="max-w-[170px] max-h-[170px]" />

          <p className="text-center text-xs flex">
            Faça login agora e descubra como é fácil transformar seus sonhos em
            conquistas.
            <ArrowUpRight className="size-8" />
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-4 items-center p-2">
          <h1 className="font-inter text-violet-600 font-bold text-2xl">
            {login ? "Login" : "SignUp"}
          </h1>

          <div className="bg-zinc-600 flex items-center justify-center rounded-3xl">
            <input
              type="radio"
              id="login"
              checked={login}
              onChange={() => {
                handleLogin(true);
              }}
              className="hidden"
            />
            <input
              type="radio"
              id="signup"
              checked={!login}
              onChange={() => {
                handleLogin(false);
              }}
              className="hidden"
            />

            <label
              className={`cursor-pointer p-2 login flex-1 text-center rounded-l-3xl min-w-28 ${
                login
                  ? "bg-violet-600 text-zinc-100"
                  : "bg-zinc-100 border border-violet-600 text-violet-500"
              }`}
              htmlFor="login"
            >
              Login
            </label>
            <label
              className={`cursor-pointer p-2 login flex-1 text-center rounded-r-3xl min-w-28 ${
                !login
                  ? "bg-violet-600 text-zinc-100"
                  : "bg-zinc-100 border border-violet-600 text-violet-500"
              }`}
              htmlFor="signup"
            >
              SignUP
            </label>
          </div>

          {/* <div className="w-[80%] h-px bg-zinc-600"></div> */}

          {login ? (
            <form
              className="flex flex-col justify-between gap-3"
              onSubmit={handleLoginUserSubmit(handleLoginUser)}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <Input
                    className="bg-zinc-100 text-zinc-800"
                    placeholder="E-mail"
                    autoFocus
                    id="email"
                    type="email"
                    {...registerLoginUser("email")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    className="bg-zinc-100 text-zinc-800"
                    placeholder="Password"
                    autoFocus
                    id="password"
                    type="password"
                    {...registerLoginUser("password")}
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-600 text-center">{errorMessage}</p>
                )}

                {isLoading && (
                  <p className="text-green-700 text-center">Carregando...</p>
                )}

                <p className="text-blue-600 text-center text-xs">
                  Forgot password?
                </p>

                <Button className="flex-1">Login</Button>
              </div>
            </form>
          ) : (
            <form
              className="flex flex-col justify-between gap-3"
              onSubmit={handleCreateUserSubmit(handleCreateUser)}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <Input
                    className="bg-zinc-100 text-zinc-800"
                    placeholder="Full name"
                    autoFocus
                    id="name"
                    type="text"
                    {...registerCreateUser("name")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    className="bg-zinc-100 text-zinc-800"
                    placeholder="Email"
                    autoFocus
                    id="email"
                    type="email"
                    {...registerCreateUser("email")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    className="bg-zinc-100 text-zinc-800"
                    placeholder="Password"
                    id="password"
                    type="password"
                    {...registerCreateUser("password")}
                  />
                </div>

                <Button className="flex-1">SignUp</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
