import { createContext } from "react"

export type ApiType = "pokeapi" | "custom"

export interface ApiContextType {
  apiType: ApiType
  setApiType: (type: ApiType) => void
}

export const ApiContext = createContext<ApiContextType | undefined>(undefined)
