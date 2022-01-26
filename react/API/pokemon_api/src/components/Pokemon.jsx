import React, { useState } from 'react'

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState([]);

    const clickHandler = (e) => {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=1')
            .then(response => response.json())
            .then(response => setPokemonNames(response.results))
    }

    return (
        <div>
            <div>
                <button onClick={clickHandler}>Fetch Pokemon</button>
                {pokemonNames.length > 0 && pokemonNames.map((pokemon, i) => {
                    return (
                        <p key={i}>{pokemon.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon