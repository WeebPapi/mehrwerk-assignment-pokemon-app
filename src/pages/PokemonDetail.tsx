import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Pokemon } from "../types/pokemon"
import { fetchPokemonById } from "../services/pokeapi"
import { useApi } from "../hooks/useApi"
import { fetchPokemonByIdJSON } from "../services/customapi"
import PokemonImageView from "../components/PokemonImageView"
import PokemonInfo from "../components/PokemonInfo"

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { apiType } = useApi()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  useEffect(() => {
    const fetchPokemon = async () => {
      const data =
        apiType === "pokeapi"
          ? await fetchPokemonById(Number(id))
          : await fetchPokemonByIdJSON(Number(id))
      console.log(data)
      setPokemon(data)
    }
    fetchPokemon()
  }, [id, apiType])
  return (
    <div className="flex sm:flex-row flex-col gap-4 ">
      <PokemonImageView
        imgUrl={
          apiType === "pokeapi"
            ? pokemon?.sprites.front_default || ""
            : pokemon?.sprites.other["official-artwork"].front_default || ""
        }
        id={id!}
        name={pokemon?.name || "Missingno"}
        types={pokemon?.types || ["unknown"]}
      />
      <PokemonInfo
        weight={pokemon?.weight || 0}
        height={pokemon?.height || 0}
        stats={pokemon?.stats || []}
      />
    </div>
  )
}

export default PokemonDetail
