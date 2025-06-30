import { LoginSchema, RegisterSchema } from "@/app/(auth)/_validators";
import { apiPublic } from "./api";

export async function createAccount(data: RegisterSchema) {
  const res = await fetch(`${apiPublic}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Isso aqui faz enviar cookies
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const response = await res.json();
  return response
}

export async function singIn(data: LoginSchema) {
  const res = await fetch(`${apiPublic}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Isso aqui faz enviar cookies
    body: JSON.stringify(data),
  });
  
  const response = await res.json();
  return response
}
