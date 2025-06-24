import { z } from "zod/v4";

export const registerSchema = z.object({
  name: z.string().min(3, "mínimo 3 caracteres").trim(),
  email: z.email("Email inválido").min(1, "Campo obrigatório"),
  password: z.string().min(6, "mínimo 6 digitos"),
  confirm: z.string(),
}).refine(data => data.password === data.confirm, {
  message: "As senhas precisam ser iguais",
  path: ["confirm"],
})

export const loginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

export type RegisterSchema = z.infer<typeof registerSchema>

export type LoginSchema = z.infer<typeof loginSchema>