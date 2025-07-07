import { api } from "./api";

export async function logout() {
  await fetch(`${api}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return;
}

export async function getUserInfo() {
  const res = await fetch(`${api}/user`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}
