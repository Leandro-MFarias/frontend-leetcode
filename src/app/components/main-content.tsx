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
import { CircleDotDashedIcon } from "lucide-react";
import { useUser } from "@/context/userInfo";
import Link from "next/link";

export function MainContent() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedList } = useList();
  const { userInfo } = useUser();

  return (
    <div className="py-6 px-8 space-y-14">
      {userInfo && userInfo.role === "ADMIN" && (
        <div className="flex items-center justify-between">
          <Button onClick={() => setIsOpen(true)} className="cursor-pointer">
            Criar Exercício
          </Button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2 col-span-2">
          <h1 className="text-xl">{selectedList?.title}</h1>

          <div className="flex flex-col border p-4 space-y-5 rounded-md">
            {selectedList?.exercises.length === 0 ? (
              <p className="text-muted-foreground text-center text-xl">
                Nehum Exercício!
              </p>
            ) : (
              selectedList?.exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="w-full flex items-center justify-between px-6"
                >
                  <Link href={`/exercises/${exercise.id}`}>
                    <button className="text-lg font-bold text-muted-foreground hover:text-white transition duration-150 ease-in cursor-pointer">
                      {exercise.title}
                    </button>
                  </Link>
                  <CircleDotDashedIcon className="text-muted-foreground" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl">Seus exercícios Finalizados</h2>
          <div className="flex flex-col border p-4 space-y-4 rounded-md">
            <h2 className="text-center">Nenhum exercício finalizado ainda</h2>
          </div>
        </div>
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
