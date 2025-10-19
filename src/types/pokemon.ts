export interface Pokemon {
  height: number
  name: string
  sprites: Sprites
  stats: Stat[]
  types: string[]
  weight: number
}

export interface Sprites {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: OtherSprites
}

export interface OtherSprites {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
  showdown: Showdown
}

export interface DreamWorld {
  front_default: string | null
  front_female: string | null
}

export interface Home {
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface OfficialArtwork {
  front_default: string | null
  front_shiny: string | null
}

export interface Showdown {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface Stat {
  base_stat: number
  stat: StatDetail
}

export interface StatDetail {
  name: string
}

export interface PokemonType {
  type: {
    name: string
    url: string
  }
}

export interface PokemonListItem {
  id: number
  name: string
  front_default: string | null
  types: string[]
}
