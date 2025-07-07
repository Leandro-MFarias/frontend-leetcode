import { api } from "./api";

export async function fetchingExercise(id: string) {
  const res = await fetch(`${api}/exercise/${id}`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}
