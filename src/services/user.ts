import { apiPrivate } from "./api";

export async function logout() {
  await fetch(`${apiPrivate}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return;
}

export async function getUserInfo() {
  const res = await fetch(`${apiPrivate}/user`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}
