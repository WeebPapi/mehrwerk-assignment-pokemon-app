export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const transformStatLabel = (label: string): string => {
  switch (label.toLowerCase()) {
    case "hp":
      return "Hp"
    case "attack":
      return "Atk"
    case "defense":
      return "Def"
    case "special-attack":
      return "Sp. Atk"
    case "special-defense":
      return "Sp. Def"
    case "speed":
      return "Spd"
    default:
      return label
  }
}
