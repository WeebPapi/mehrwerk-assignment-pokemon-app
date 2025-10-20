import React from "react"
import { capitalizeFirstLetter } from "../utils/helpers"
import TypeBadge from "./TypeBadge"

interface Props {
  imgUrl: string
  id: string
  name: string
  types?: string[]
}

const PokemonImageView: React.FC<Props> = ({ imgUrl, id, name, types }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-[400px] ">
      <div className="bg-gray-100 rounded-4xl flex flex-col items-center p-4">
        <p className="text-2xl text-gray-700">#{id.padStart(3, "0")}</p>
        <img
          className="max-w-[300px] w-full"
          src={imgUrl || "https://via.placeholder.com/150"}
          alt={`Pokemon ${name}`}
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800 ">
          {capitalizeFirstLetter(name)}
        </h2>
        <div className="flex gap-2">
          {types &&
            types.length > 0 &&
            types.map((type, index) => (
              <TypeBadge key={type + index} type={type} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonImageView
