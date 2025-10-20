import React from "react"
import { capitalizeFirstLetter } from "../utils/helpers"

interface TypeBadgeProps {
  type: string
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "grass":
        return "bg-green-500"
      case "water":
        return "bg-blue-500"
      case "fire":
        return "bg-red-500"
      case "flying":
        return "bg-blue-300"
      case "bug":
        return "bg-lime-700"
      case "poison":
        return "bg-purple-500"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <span
      className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${getTypeColor(
        type
      )}`}
    >
      {capitalizeFirstLetter(type)}
    </span>
  )
}

export default TypeBadge
