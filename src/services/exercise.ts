import { apiPrivate } from "./api";

export async function fetchingExercise(id: string) {
  const res = await fetch(`${apiPrivate}/exercise/${id}`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}
