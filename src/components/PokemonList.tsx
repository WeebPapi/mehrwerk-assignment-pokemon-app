import React, { useEffect, useState } from "react"
import type { PokemonListItem } from "../types/pokemon"
import { fetchPokemonList } from "../services/pokeapi"
import { PokemonCard } from "./PokemonCard"

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonList()
      setPokemon(data)
    }
    fetchData()
  }, [])
  return (
    <div className="grid sm:grid-cols-3 sm:gap-12 grid-cols-1 gap-8 ">
      {pokemon.length > 0 &&
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
