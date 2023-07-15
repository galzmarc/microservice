import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {

    async function getPokemon(id) {
      try {
        const response = await fetch(`http://localhost:8080/${id}`)
        if (response.ok) {
          const data = await response.json()
          const {id, name, sprites} = data;
          setPokemon({id, name: name[0].toUpperCase() + name.substring(1), img: sprites.other['official-artwork'].front_default})
        }
      } catch(err) {
        console.log(err)
      }
    }

    function getRandomIndex() {
      return Math.floor(Math.random() * 1010 +1);
    }

    const id = getRandomIndex()
    getPokemon(id);

  }, [])

  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img} alt={pokemon.name} />
    </>
  )
}

export default App
