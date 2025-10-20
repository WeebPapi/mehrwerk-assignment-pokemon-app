import { useApi } from "../hooks/useApi"

export const APIToggle: React.FC = () => {
  const { apiType, setApiType } = useApi()

  const handleToggle = () => {
    setApiType(apiType === "pokeapi" ? "custom" : "pokeapi")
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-white text-sm font-medium">PokeAPI</span>

      <button
        onClick={handleToggle}
        className="relative w-16 h-8 bg-white shadow-md transition-all duration-300"
        style={{
          outline: "none",
          border: "none",
          borderRadius: "20px",
          background: "white",
        }}
        role="switch"
        aria-checked={apiType === "custom"}
        aria-label="Toggle between PokeAPI and Custom API"
      >
        {/* Sliding circle */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-black rounded-full shadow-md transition-transform duration-300 ${
            apiType === "custom" ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>

      <span className="text-white text-sm font-medium">Custom API</span>
    </div>
  )
}
