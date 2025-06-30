"use client";

import { getUserInfo } from "@/services/user";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface UserExerciseStatus {
  id: number;
  userId: number;
  exerciseId: number;
  status: string;
  attempts: number;
  completedAt: string | null;
}

export interface UserInfoType {
  id: number;
  name: string;
  email: string;
  role: string;
  progress: UserExerciseStatus[];
}

interface UserContextType {
  userInfo: UserInfoType | null;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const data = await getUserInfo();
      setUserInfo(data);
    }
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Use o context User dentro de um provider");
  }
  return context;
}
