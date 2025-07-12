"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../_validators";
import { singIn } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleArrowRightIcon } from "lucide-react";

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
      router.push("/");
    } catch (error) {
      console.log("Login erro:", error);
    }
  }

  return (
    <div className="relative flex justify-evenly items-center h-screen bg-[url(/auth-bg.svg)] bg-cover text-[#003A77] space-y-14 pb-10">
      <div className="z-50 space-y-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-[460px] p-4"
        >
          <Image
            src="/prati-logo.png"
            width={200}
            height={200}
            alt="logo"
            className="self-center"
          />

          <div className="flex flex-col space-1.5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className={`outline-none border-2 border-[#003a77] px-2.5 py-3 rounded-md ${
                errors.email?.message && "border-[#c90912]"
              }`}
              placeholder="eu@exemplo.com"
              {...register("email")}
            />
            <p className="pl-1 text-[#c90912] font-bold text-sm">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex flex-col space-1.5">
            <label htmlFor="password">Senha</label>
            <input
              type={`password`}
              id="password"
              className={`outline-none border-2 border-[#003a77] px-2.5 py-3 rounded-md ${
                errors.password?.message && "border-[#c90912]"
              }`}
              placeholder="**********"
              {...register("password")}
            />
            <p className="pl-1 text-[#c90912] font-bold text-sm">
              {errors.password?.message}
            </p>
          </div>

          <button
            className={`flex justify-center items-center space-x-2 w-full py-2 font-bold rounded-md cursor-pointer bg-[#003A77] border hover:bg-blue-600 transition duration-200 ease-in text-white group ${
              isSubmitting ? "" : ""
            }`}
          >
            <p>{isSubmitting ? "Entrando..." : "Fazer Login"}</p>
            <CircleArrowRightIcon className="group-hover:translate-x-1 transition duration-200 ease-in" />
          </button>
        </form>
        <Link href="/register">
          <p className="text-[#003a77] text-center text-lg">
            Não possui cadastro?
            <span className="font-bold text-[#ff8e63]"> Registre-se</span>
          </p>
        </Link>
      </div>

      {/* BEM VINDO  */}
      <div className="self-start pt-[235px] translate-x-30 ss:hidden hs:block">
        <Image src="/bem-vindo.png" width={400} height={400} alt="Bem vindo" />
      </div>
    </div>
  );
}
