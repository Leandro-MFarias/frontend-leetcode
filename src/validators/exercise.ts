import { z } from "zod/v4";

export const exerciseSchema = z
  .object({
    title: z.string().min(3, "mínimo 3 caracteres"),
    functionName: z.string().min(3, "mínimo 3 caracteres"),
    subtitle: z.string().min(1, "campo obrigatório"),
    description: z.string().min(1, "campo obrigatório"),
    functionSignature: z.string().min(1, "campo obrigatório"),
    exemple: z.array(
      z.object({
        entrada: z.string().min(1, "campo obrigatório"),
        saida: z.string().min(1, "campo obrigatório"),
      })
    ),
    testCases: z.array(
      z.object({
        input: z.string().min(1, "campo obrigatório"),
        expectedOutput: z.string().min(1, "campo obrigatório"),
      })
    ),
    existingList: z.string().optional(),
    newList: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.newList || data.existingList;
    },
    {
      message: "Informe uma lista existente ou crie uma nova",
    }
  );

export type ExerciseSchema = z.infer<typeof exerciseSchema>;
