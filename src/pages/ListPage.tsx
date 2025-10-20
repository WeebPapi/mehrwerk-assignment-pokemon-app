import React from "react"
import PokemonList from "../components/PokemonList"

const ListPage: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-4">
        <PokemonList />
      </div>
    </main>
  )
}

export default ListPage
