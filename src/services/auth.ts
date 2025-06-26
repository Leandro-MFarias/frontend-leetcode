import { LoginSchema, RegisterSchema } from "@/app/(auth)/_validators";

export const api = "http://localhost:3333";

export async function createAccount(data: RegisterSchema) {
  const res = await fetch(`${api}/register`, {
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

  return res.json();
}

export async function singIn(data: LoginSchema) {
  const res = await fetch(`${api}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Isso aqui faz enviar cookies
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function logout() {
  await fetch(`${api}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return;
}

export async function userInfo() {
  const res = await fetch(`${api}/user`, {
    method: "GET",
    credentials: "include",
  })
  return res.json()
}