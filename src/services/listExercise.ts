import { api } from "./user-and-auth";

export async function listsExercise() {
  const res = await fetch(`${api}/listExercise`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}
