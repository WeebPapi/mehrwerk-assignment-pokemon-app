import { Ruler, Weight } from "lucide-react"
import type { Stat } from "../types/pokemon"
import PokemonStats from "./PokemonStats"

interface Props {
  weight: number
  height: number
  stats: Stat[]
}
const PokemonInfo: React.FC<Props> = ({ weight, height, stats }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-[600px]  text-black ">
      <h3 className="text-2xl mb-4">Pokemon Info</h3>
      <div className="flex gap-4">
        <div className="bg-gray-100 rounded-xl p-6">
          <h4 className="text-md mb-2">Weight</h4>
          <span className="font-bold flex gap-2">
            <Weight color="red" />
            {weight} kg
          </span>{" "}
        </div>
        <div className="bg-gray-100 rounded-xl p-6">
          <h4 className="text-md mb-2">Height</h4>
          <span className="font-bold flex gap-2">
            <Ruler color="red" />
            {height} m
          </span>{" "}
        </div>
      </div>
      <PokemonStats stats={stats} />
    </div>
  )
}

export default PokemonInfo
