import { useState, type ReactNode } from "react"
import { ApiContext, type ApiContextType } from "../context/ApiContext"

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [apiType, setApiType] = useState<ApiContextType["apiType"]>("pokeapi")

  return (
    <ApiContext.Provider value={{ apiType, setApiType }}>
      {children}
    </ApiContext.Provider>
  )
}
