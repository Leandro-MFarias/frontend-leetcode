"use client";

import { ListExercise, useList } from "@/context/listfilter";

export function AsideLists() {
  const { lists, setSelectedList } = useList();

  function handleShowList(list: ListExercise) {
    setSelectedList(list);
  }

  return (
    <aside className="flex flex-col h-screen border-r-1 border-zinc-800 p-6 space-y-6">
      <div>
        <h4 className="font-bold text-lg">Listas de Exercícios</h4>
        <div className="bg-zinc-800 w-full h-[1px]" />
      </div>

      <nav>
        <ul className="space-y-4">
          {!lists ? (
            <li>Nenhuma lista encontrada</li>
          ) : (
            lists.map((list) => (
              <li key={list.id} className="text-muted-foreground">
                <button onClick={() => handleShowList(list)}>{list.title}</button>
              </li>
            ))
          )}
        </ul>
      </nav>
    </aside>
  );
}
