"use client"

import { fetchingExercise } from "@/services/exercise";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ExerciseType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  functionSignature: string;
  exemple: { entrada: string; saida: string }[];
  testCases: { input: string; expectedOutput: string }[];
  lista: {
    id: number;
    title: string;
  };
  progress: {
    id: number;
    userId: number;
    exerciseId: number;
    status: string;
    attempts: number;
    completedAt: string | null;
  }[];
}

const ExerciseContext = createContext<{ exercise: ExerciseType | null } | undefined>(undefined)

export function ExerciseProvider({ children, exerciseId }: { children: ReactNode, exerciseId: string }) {
  const [ exercise, setExercise ] = useState<ExerciseType | null>(null)

  useEffect(() => {
    async function getExercise(exercideId: string) {
      const result = await fetchingExercise(exercideId)
      console.log(result);
      setExercise(result)
    }

    getExercise(exerciseId)
  }, [])

  return (
    <ExerciseContext.Provider value={{ exercise }}>
      {children}
    </ExerciseContext.Provider>
  )
}

export function useExercise() {
  const context = useContext(ExerciseContext)
  if (!context) {
    throw new Error("Acesse o context Exercise dentro de um provider")
  }

  return context
}