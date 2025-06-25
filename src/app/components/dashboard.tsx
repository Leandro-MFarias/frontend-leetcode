"use client"

import { Button } from "@/components/ui/button"

export function Dashboard() {
  return (
    <div className="flex flex-col px-8 pt-6 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Listas de exercicio 1</h1>
        <Button>Criar Exercício</Button>
      </div>

      <div className="border rounded-3xl max-w-[480px] p-4 space-y-4">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}