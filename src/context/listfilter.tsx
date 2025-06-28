import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { listsExercise } from "@/services/listExercise";

const ListsContext = createContext(null)

interface ListExercise {
  id: number
  title: string
  description: string
  exercise: { id: number }[]
}

export function ListsProvider({ children }: { children: ReactNode }) {
  const [selectedList, setSelectedList] = useState()
  const [lists, setLists] = useState<ListExercise[]>([]);

  useEffect(() => {
    async function fetching() {
      const response = await listsExercise();
      const data = response.listExercises;
      setLists(data);
    }

    fetching();
  }, []);

  return (
    <ListsContext.Provider value={{selectedList, setSelectedList, lists}}>
      {children}
    </ListsContext.Provider>
  )
}

export function useList() {
  const context = useContext(ListsContext)
  
  if (!context) {
    throw new Error("Acesse list dentro de um contexto")
  }
  return context
}