"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FormExercise } from "./form-exercise";
import { useList } from "@/context/listfilter";

export function MainContent() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedList } = useList();

  // if (!selectedList) {
  //   return <h2>Nehum Exercício no momento!</h2>;
  // }

  return (
    <div className="flex flex-col px-8 pt-6 space-y-10">
      {selectedList
        ? selectedList.exercises.map((exercise) => (
          <div key={exercise.id}>{exercise.title}</div>
        ))
        : ""}

      <div className="flex justify-between items-center">
        <h1 className="text-xl">Listas de exercicio 1</h1>
        <Button onClick={() => setIsOpen(true)}>Criar Exercício</Button>
      </div>
      <div className="border rounded-3xl max-w-[480px] p-4 space-y-4">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

      {/* FORM EXERCISE */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar Exercício</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FormExercise setIsOpen={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
