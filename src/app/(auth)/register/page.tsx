"use client";

import { useForm } from "react-hook-form";
import { createAccount } from "../../../services/auth";
import { RegisterSchema, registerSchema } from "../_validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterSchema) {
    try {
      await createAccount(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative flex flex-col items-center h-screen bg-neutral-900 space-y-14 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2),_transparent_60%)]" />

      <h1 className="text-5xl font-bold text- pr-6">+praTi</h1>
      <div className="z-50 space-y-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-[460px] p-4 rounded-2xl bg-black/30 border"
        >
          <h3 className="text-4xl font-bold">Cadastra-se</h3>

          <div className="flex flex-col space-1.5">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              className="bg-zinc-700 px-2.5 py-3 rounded-md"
              placeholder="Nome"
              {...register("name")}
            />
            <p className="pl-1 text-red-700 font-bold text-sm">
              {errors.name?.message}
            </p>
          </div>

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
          <div className="flex flex-col space-1.5">
            <label htmlFor="confirmation">Confirme sua senha</label>
            <input
              type={`password`}
              id="confirmation"
              className="bg-zinc-700 px-2.5 py-3 rounded-md"
              placeholder="**********"
              {...register("confirm")}
            />
            <p className="pl-1 text-red-700 font-bold text-sm">
              {errors.confirm?.message}
            </p>
          </div>

          <button
            className={`w-full py-2 font-bold rounded-md cursor-pointer bg-zinc-800 border hover:bg-purple-500/50 transition duration-500 ease-linear ${
              isSubmitting ? "" : ""
            }`}
          >
            {isSubmitting ? "Carregando..." : "Fazer Cadastro"}
          </button>
        </form>
        <Link href="/">
          <p className="text-muted-foreground text-center text-lg">
            Não possui cadastro?
            <span className="font-bold text-white"> Faça o login</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
