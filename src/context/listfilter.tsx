import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { listsExercise } from "@/services/listExercise";

export interface ListExercise {
  id: number;
  title: string;
  exercises: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    functionSignature: string;
    exemple: { entrada: string; saida: string }[];
    testCases: { input: string; expectedOutput: string }[];
  }[];
}

interface ListContextType {
  lists: ListExercise[];
  selectedList: ListExercise | null;
  setSelectedList: (list: ListExercise) => void;
}

const ListsContext = createContext<ListContextType | undefined>(undefined);

export function ListsProvider({ children }: { children: ReactNode }) {
  const [lists, setLists] = useState<ListExercise[]>([]);
  const [selectedList, setSelectedList] = useState<ListExercise | null>(null);

  useEffect(() => {
    async function fetching() {
      const response = await listsExercise();
      const data = response.listExercises;
      setLists(data);
      if (data.length > 0) {
        setSelectedList(data[0])
      }
    }

    fetching();
  }, []);

  return (
    <ListsContext.Provider value={{ selectedList, setSelectedList, lists }}>
      {children}
    </ListsContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListsContext);

  if (!context) {
    throw new Error("Acesse list dentro de um contexto");
  }
  return context;
}
