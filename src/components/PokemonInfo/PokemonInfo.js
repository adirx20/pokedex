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

    if (searchTerm === '') {
        return <div>No data</div>
    }

    if (!pokemonData) {
        return <div>Not found</div>;
    }

    const ability = pokemonData.abilities
        ? pokemonData.abilities[0].ability.name
        : 'Unknown';

    const moveA = pokemonData.moves
        ? pokemonData.moves[0].move.name
        : 'Unknown';

    const moveB = pokemonData.moves
        ? pokemonData.moves[1].move.name
        : 'Unknown';

    const moveC = pokemonData.moves
        ? pokemonData.moves[2].move.name
        : 'Unknown';

    return (
        <div className='pokemon-info'>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.imageUrl} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}0cm</p>
            <p>Weight: {pokemonData.weight}00gr</p>
            <p>Ability: {ability}</p>
            <p>Moves: {moveA}</p>
        </div>
    );
}

export default PokemonInfo;