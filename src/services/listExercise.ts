import { api } from "./api";

export async function listsExercise() {
  const res = await fetch(`${api}/listExercise`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}
