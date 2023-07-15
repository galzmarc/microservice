import { useEffect, useState } from 'react'
import getColorByPokemonType from "./utils/getColorByPokemonType"
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getPokemon(id) {
      try {
        const response = await fetch(`http://localhost:8080/${id}`)
        if (response.ok) {
          const data = await response.json()
          const {id, name, sprites, types} = data;
          setPokemon({
            id,
            name: name[0].toUpperCase() + name.substring(1),
            img: sprites.other['official-artwork'].front_default,
            types,
          })
          setLoading(false)
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
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="card" style={{backgroundColor: getColorByPokemonType(pokemon.types[0].type.name)}}>
          <div className='top'>
            <h2>{pokemon.name}</h2>
            <h3>#{pokemon.id}</h3>
          </div>
          <div className='types'>
            {pokemon.types.map(t => {
              return <p>{t.type.name[0].toUpperCase() + t.type.name.substring(1)}</p>
            })}
          </div>
          <img src={pokemon.img} alt={pokemon.name} />
        </div>
      )}
    </>
  )
}

export default App
