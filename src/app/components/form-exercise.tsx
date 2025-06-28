"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useList } from "@/context/listfilter";
import { createExercise } from "@/services/createExercise";
import { ExerciseSchema, exerciseSchema } from "@/validators/exercise";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface FormExerciseProps {
  setIsOpen: () => void
} 

export function FormExercise({ setIsOpen }: FormExerciseProps) {
  const { lists } = useList();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ExerciseSchema>({
    resolver: zodResolver(exerciseSchema),
  });

  async function onSubmitForm(data: ExerciseSchema) {
    try {
      await createExercise(data)
      setIsOpen()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      {/* TITLE E LIST */}
      <div className="flex space-x-4">
        <div className="space-y-1">
          <input
            type="text"
            placeholder="nome do exercício"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("title")}
          />
          {errors.title?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.title.message}
            </p>
          )}
        </div>

        <Select
          value={watch("existingList")} 
          onValueChange={(value) => setValue("existingList", value)}
        >
          <SelectTrigger className="w-[210px]">
            <SelectValue placeholder="Lista de Exercício" />
          </SelectTrigger>
          <SelectContent>
            {lists && lists.map((list) => (
              <SelectItem key={list.id} value={String(list.id)}>
                {list.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* NEW LIST */}
      <div className="space-y-1">
        <input
          type="text"
          placeholder="Nova lista"
          className="border px-2 py-1.5 rounded-md outline-0 w-full"
          {...register("newList")}
        />
        {errors.newList?.message && (
          <p className="text-red-600 text-sm font-bold">
            {errors.newList.message}
          </p>
        )}
      </div>

      {/* SUBTITLE */}
      <div className="space-y-1">
        <input
          type="text"
          placeholder="subtitulo"
          className="border px-2 py-1.5 rounded-md outline-0 w-full"
          {...register("subtitle")}
        />
        {errors.subtitle?.message && (
          <p className="text-red-600 text-sm font-bold">
            {errors.subtitle.message}
          </p>
        )}
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-1">
        <textarea
          placeholder="Descrição"
          className="border px-2 py-1.5 rounded-md outline-0 w-full"
          {...register("description")}
        />
        {errors.description?.message && (
          <p className="text-red-600 text-sm font-bold">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* FUNCTIONSIGNATURE */}
      <div className="space-y-1">
        <input
          type="text"
          placeholder="Exemplo: function parOuImpar(n) {}"
          className="border px-2 py-1.5 rounded-md outline-0 w-full"
          {...register("functionSignature")}
        />
        {errors.functionSignature?.message && (
          <p className="text-red-600 text-sm font-bold">
            {errors.functionSignature.message}
          </p>
        )}
      </div>

      {/* EXEMPLE 1 */}
      <div className="flex space-x-2">
        <div className="space-y-1">
          <input
            type="text"
            placeholder="Exemplo 1: entrada"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("exemple.0.entrada")}
          />
          {errors.exemple?.[0]?.entrada?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.exemple[0].entrada.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <input
            type="text"
            placeholder="Exemplo 1: saida"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("exemple.0.saida")}
          />
          {errors.exemple?.[0]?.saida?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.exemple[0].saida.message}
            </p>
          )}
        </div>
      </div>

      {/* EXEMPLE 2 */}
      <div className="flex space-x-2">
        <div className="space-y-1">
          <input
            type="text"
            placeholder="Exemplo 2: entrada"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("exemple.1.entrada")}
          />
          {errors.exemple?.[1]?.entrada?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.exemple[1].entrada.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <input
            type="text"
            placeholder="Exemplo 2: saida"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("exemple.1.saida")}
          />
          {errors.exemple?.[1]?.saida?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.exemple[1].saida.message}
            </p>
          )}
        </div>
      </div>

      {/* TESTECASE 1 */}
      <div className="flex space-x-2">
        <div className="space-y-1">
          <input
            type="text"
            placeholder="TestCase 1: input"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("testCases.0.input")}
          />
          {errors.testCases?.[0]?.input?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.testCases[0].input.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <input
            type="text"
            placeholder="TestCase 1: output"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("testCases.0.expectedOutput")}
          />
          {errors.testCases?.[0]?.expectedOutput?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.testCases[0].expectedOutput.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <div className="space-y-1">
          <input
            type="text"
            placeholder="TestCase 2: input"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("testCases.1.input")}
          />
          {errors.testCases?.[1]?.input?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.testCases[1].input.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <input
            type="text"
            placeholder="TestCase 2: output"
            className="border px-2 py-1.5 rounded-md outline-0 w-full"
            {...register("testCases.1.expectedOutput")}
          />
          {errors.testCases?.[1]?.expectedOutput?.message && (
            <p className="text-red-600 text-sm font-bold">
              {errors.testCases[1].expectedOutput.message}
            </p>
          )}
        </div>
      </div>

      <Button className="w-full" disabled={isSubmitting ? true : false}>
        {isSubmitting ? "Criando..." : "Criar"}
      </Button>
    </form>
  );
}
