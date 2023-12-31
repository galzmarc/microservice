function getColorByPokemonType(type) {
  switch(type) {
    case "normal":
      return '#A8A878'
    case "fighting":
      return '#C03028'
    case "flying": 
      return '#A890F0'
    case "poison":
      return '#A040A0'
    case "ground":
      return '#E0C068'
    case "rock":
      return '#B8A038'
    case "bug":
      return '#A8B820'
    case "ghost":
      return '#705898'
    case "steel":
      return '#B8B8D0'
    case "fire":
      return '#FA6C6C'
    case "water":
      return '#6890F0'
    case "grass":
      return '#48CFB2'
    case "electric":
      return '#FFCE4B'
    case "psychic":
      return '#F85888'
    case "ice":
      return '#98D8D8'
    case "dragon":
      return '#7038F8'
    case "dark":
      return '#705848'
    case "fairy":
      return '#EE99AC'
  }
}

export default getColorByPokemonType;