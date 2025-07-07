import { ExerciseSchema } from "@/validators/exercise";
import { api } from "./api";

export async function createExercise(data: ExerciseSchema) {
  const res = await fetch(`${api}/createExercise`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res.json();
}
