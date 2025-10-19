import React from "react"
import PokemonList from "../components/PokemonList"
import APIToggle from "../components/APIToggle"

const ListPage: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-between items-center w-full">
          <img
            className="max-w-[450px]"
            src="/src/assets/pokemontext.png"
            alt="Pokemon Logo"
          />
          <APIToggle />
        </div>
        <PokemonList />
      </div>
    </main>
  )
}

export default ListPage
