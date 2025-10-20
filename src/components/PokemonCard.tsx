import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { capitalizeFirstLetter } from "../utils/helpers"
import TypeBadge from "./TypeBadge"

interface PokemonCardProps {
  sprite: string
  name: string
  types: string[]
  id: string
}

const bgs = [
  "bg-1.jpg",
  "bg-2.jpg",
  "bg-3.jpg",
  "bg-4.webp",
  "bg-5.jpg",
  "bg-6.webp",
  "bg-7.webp",
  "bg-8.png",
]

export const PokemonCard: React.FC<PokemonCardProps> = ({
  sprite,
  name,
  types,
  id,
}) => {
  const [bgImage, setBgImage] = useState<string>("")
  const navigate = useNavigate()

  useEffect(() => {
    const randomBg = bgs[Math.floor(Math.random() * bgs.length)]
    setBgImage(new URL(`/src/assets/bgs/${randomBg}`, import.meta.url).href)
  }, [])

  return (
    <div
      onClick={() => {
        navigate(`/pokemon/${id}`)
      }}
      className="w-80 h-96 hover:scale-105 transition-all cursor-pointer bg-white rounded-lg shadow-lg p-3 flex flex-col justify-between"
    >
      <div
        className="flex-1 rounded-sm bg-cover bg-center flex items-center justify-center overflow-hidden mb-4"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
        }}
      >
        <img
          src={sprite}
          alt={name}
          className="h-full w-full object-contain drop-shadow-md"
        />
      </div>

      <div className="h-16 flex items-center justify-between">
        <h2 className=" text-black text-lg font-light tracking-wide">
          {capitalizeFirstLetter(name)}
        </h2>
        <div className="w-full flex justify-end gap-2">
          {types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
    </div>
  )
}
