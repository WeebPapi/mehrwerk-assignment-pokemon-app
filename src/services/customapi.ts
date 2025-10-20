import type { PokemonListItem } from "../types/pokemon"
import pokemonListData from "../data/pockemons.json"
import bulbasaur from "../data/bulbasaur.json"
import ivysaur from "../data/ivysaur.json"
import venusaur from "../data/venusaur.json"
import charmander from "../data/charmander.json"
import charmeleon from "../data/charmeleon.json"
import charizard from "../data/charizard.json"
import squirtle from "../data/squirtle.json"
import wartortle from "../data/wartortle.json"
import blastoise from "../data/blastoise.json"
import caterpie from "../data/caterpie.json"

const pokemonDetailsMap = [
  null,
  bulbasaur,
  ivysaur,
  venusaur,
  charmander,
  charmeleon,
  charizard,
  squirtle,
  wartortle,
  blastoise,
  caterpie,
]

export const fetchPokemonByIdJSON = async (id: number) => {
  try {
    const data = pokemonDetailsMap[id]

    if (!data) {
      throw new Error(`Local Pokemon data for id ${id} not found.`)
    }

    return Promise.resolve(data)
  } catch (error) {
    console.error(`Error fetching Pokemon with id ${id} from JSON:`, error)
    throw error
  }
}

export const fetchPokemonListJSON = async (): Promise<PokemonListItem[]> => {
  try {
    return Promise.resolve(pokemonListData as PokemonListItem[])
  } catch (error) {
    console.error("Error fetching Pokemon list from JSON:", error)
    throw error
  }
}
