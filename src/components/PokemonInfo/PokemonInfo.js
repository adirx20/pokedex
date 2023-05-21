import React, { useState, useEffect } from 'react';
import './PokemonInfo.css';
import { fetchPokemonData } from '../../utils/api';

function PokemonInfo({ searchType, searchTerm }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetchPokemonData(searchType, searchTerm)
        .then((data) => setPokemonData(data))
        .catch((error) => {
            console.log('Error fetching Pokemon data: ', error);
        });
    }, [searchType, searchTerm]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='pokemon-info'>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.imageUrl} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}0cm</p>
            <p>Weight: {pokemonData.weight}00gr</p>
            <p>Ability: {pokemonData.abilities[0].ability.name}</p>
            <p>Moves: {pokemonData.moves[0].move.name}, {pokemonData.moves[1].move.name}, {pokemonData.moves[2].move.name}</p>
        </div>
    );
}

export default PokemonInfo;