"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../_validators";
import { singIn } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    try {
      await singIn(data);
      const result = await fetch(
        "https://backend-leetcode-production.up.railway.app/test/test",
        {
          credentials: "include",
        }
      );
      const res = await result.json();
      console.log("test", res.message);

      if (res.message === "RECEBIDOO") {
        console.log("Redirecionando para /");
        router.push("/");
      }
    } catch (error) {
      console.log("Login erro:", error);
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-neutral-900 space-y-14 pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2),_transparent_60%)]" />

      <h1 className="text-5xl font-bold text- pr-6">+praTi</h1>
      <div className="z-50 space-y-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-[460px] p-4 rounded-2xl bg-black/30 border"
        >
          <h3 className="text-4xl font-bold">Boas Vindas</h3>

          <div className="flex flex-col space-1.5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="bg-zinc-700 px-2.5 py-3 rounded-md"
              placeholder="eu@exemplo.com"
              {...register("email")}
            />
            <p className="pl-1 text-red-700 font-bold text-sm">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex flex-col space-1.5">
            <label htmlFor="password">Senha</label>
            <input
              type={`password`}
              id="password"
              className="bg-zinc-700 px-2.5 py-3 rounded-md"
              placeholder="**********"
              {...register("password")}
            />
            <p className="pl-1 text-red-700 font-bold text-sm">
              {errors.password?.message}
            </p>
          </div>

          <button
            className={`w-full py-2 font-bold rounded-md cursor-pointer bg-zinc-800 border hover:bg-purple-500/50 transition duration-500 ease-linear ${
              isSubmitting ? "" : ""
            }`}
          >
            {isSubmitting ? "Entrando..." : "Fazer Login"}
          </button>
        </form>
        <Link href="/register">
          <p className="text-muted-foreground text-center text-lg">
            Não possui cadastro?
            <span className="font-bold text-white">Registre-se</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
