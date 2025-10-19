import React, { useEffect, useState } from "react"
import type { PokemonListItem } from "../types/pokemon"
import { fetchPokemonList } from "../services/pokeapi"
import { PokemonCard } from "./PokemonCard"

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([])
  const firstRender = React.useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const fetchData = async () => {
      const data = await fetchPokemonList()
      setPokemon(data)
    }
    fetchData()
    console.log(pokemon)
  }, [firstRender.current])
  return (
    <div className="grid grid-cols-3 gap-12">
      {!firstRender.current &&
        pokemon.map((p) => (
          <PokemonCard
            key={p.name}
            name={p.name}
            sprite={p.front_default || "https://via.placeholder.com/150"}
            types={p.types}
            id={p.id.toString()}
          />
        ))}
    </div>
  )
}

export default PokemonList
