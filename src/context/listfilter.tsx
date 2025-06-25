import { createContext, ReactNode, useContext, useState } from "react"


const ListsContext = createContext(null)

export function ListsProvider({ children }: { children: ReactNode }) {
  const [selectedList, setSelectedList] = useState()

  return (
    <ListsContext.Provider value={{selectedList, setSelectedList}}>
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