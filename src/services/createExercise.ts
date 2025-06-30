import { ExerciseSchema } from "@/validators/exercise";
import { apiPrivate } from "./api";

export async function createExercise(data: ExerciseSchema) {
  const res = await fetch(`${apiPrivate}/createExercise`, {
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
