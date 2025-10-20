import { useApi } from "../hooks/useApi"

export const APIToggle: React.FC = () => {
  const { apiType, setApiType } = useApi()

  const handleToggle = () => {
    setApiType(apiType === "pokeapi" ? "custom" : "pokeapi")
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="whitespace-nowrap text-xs font-medium text-white sm:text-sm">
        PokeAPI
      </span>

      <button
        onClick={handleToggle}
        className="relative h-6 w-12 shrink-0 rounded-full bg-white shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 sm:h-8 sm:w-16"
        role="switch"
        aria-checked={apiType === "custom"}
        aria-label="Toggle between PokeAPI and Custom API"
      >
        <div
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-black shadow-md transition-transform duration-300 sm:h-6 sm:w-6 ${
            apiType === "custom"
              ? "translate-x-6 sm:translate-x-8"
              : "translate-x-0"
          }`}
        />
      </button>

      <span className="whitespace-nowrap text-xs font-medium text-white sm:text-sm">
        Custom API
      </span>
    </div>
  )
}
