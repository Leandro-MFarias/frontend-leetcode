"use client"

import { createContext, ReactNode, useContext, useState } from "react";


interface VerifyProps {
  checked: boolean
  setChecked: (value: boolean) => void
}

const VerifyContext = createContext<VerifyProps | undefined>(undefined)

export function VerifyProvider({ children }: { children: ReactNode }) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <VerifyContext.Provider value={{ checked, setChecked }}>
      {children}
    </VerifyContext.Provider>
  )
}

export function useVerifyContext() {
  const context = useContext(VerifyContext)
  if (!context) {
    throw new Error("Use a verificação dentro de um provider")
  }

  return context
}