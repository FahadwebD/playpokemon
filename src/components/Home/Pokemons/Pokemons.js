
import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import './Pokemon.css'
const Pokemons = () => {
    const[pokemons , setPokemons] = useState([]);

    useEffect(()=>{


        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => setPokemons(data.results))

    } ,[])

    return (
        <div className='mapGrid'>  
            {
                pokemons.map(poke => <Pokemon poke={poke}></Pokemon>)
            }
        </div>
    );
};

export default Pokemons;