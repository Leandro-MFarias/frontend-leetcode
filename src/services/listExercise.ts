import { apiPrivate } from "./api";

export async function listsExercise() {
  const res = await fetch(`${apiPrivate}/listExercise`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}
