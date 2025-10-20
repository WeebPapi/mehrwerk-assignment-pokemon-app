import React from "react"
import type { Stat } from "../types/pokemon"
import StatBar from "./StatBar"

interface Props {
  stats: Stat[]
}

const PokemonStats: React.FC<Props> = ({ stats }) => {
  return (
    <div className="bg-white rounded-2xl  p-6 pl-0 text-black">
      <h3 className="text-2xl mb-4">Stats</h3>
      {stats.map((stat) => (
        <StatBar
          key={stat.stat.name}
          label={stat.stat.name}
          value={stat.base_stat}
        />
      ))}
    </div>
  )
}

export default PokemonStats
