import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState([]);

    const fetchData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=20')
            .then((response) => {
                setPokemonNames(response.data.results);
                console.log(response.data);
            })
    }

    return (
        <div>
            <div className="p-3">
                <button onClick={fetchData}>Fetch Pokemon</button>
                {pokemonNames.map((pokemon, i) => {
                    return (
                        <p key={i}>{pokemon.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon