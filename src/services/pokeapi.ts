import type { PokemonType, PokemonListItem } from "../types/pokemon"
import axios from "axios"

const BASE_URL = "https://pokeapi.co/api/v2"

export const fetchPokemonById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching Pokemon with id ${id}:`, error)
    throw error
  }
}

export const fetchPokemonList = async (): Promise<PokemonListItem[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=10`)
    const fullResp = await Promise.all(
      response.data.results.map(async (p: { url: string }) => {
        const id = parseInt(p.url.split("/").slice(-2, -1)[0])
        const pokemonData = await fetchPokemonById(id)
        return {
          id: id,
          name: pokemonData.name,
          front_default: pokemonData.sprites.front_default,
          types: pokemonData.types.map(
            (typeInfo: PokemonType) => typeInfo.type.name
          ),
        }
      })
    )
    return fullResp
  } catch (error) {
    console.error("Error fetching Pokemon list:", error)
    throw error
  }
}
