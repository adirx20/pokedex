import React, { useState, useEffect } from 'react';
import './PokemonInfo.css';
import { fetchPokemonData } from '../../utils/api';

function PokemonInfo({ pokemonName, searchType, searchTerm }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetchPokemonData({ pokemonName })
            .then((data) => {
                setPokemonData(data);
                console.log('pokemon data: ', pokemonData);
            })
            .catch((error) => {
                console.log('Error fetching Pokemon data: ', error);
            });
    }, [pokemonName]);

    if (pokemonName === '') {
        return <div>No data</div>
    }

    if (!pokemonData) {
        return <div>Not found</div>;
    }

    const name = pokemonData.name;
    const height = pokemonData.height;
    const weight = pokemonData.weight;
    const baseExp = pokemonData.base_experience;

    const imageDefault = pokemonData.sprites
        ? pokemonData.sprites.front_default
        : '';

    const imageShiny = pokemonData.sprites
        ? pokemonData.sprites.front_shiny
        : '';

    const abilities = pokemonData.abilities
        ? pokemonData.abilities.map((ability) => ability.ability.name)
        : [];

    const moves = pokemonData.moves
        ? pokemonData.moves.map((move) => move.move.name)
        : [];


    return (
        <div className='pokemon-info'>
            <h2 className='pokemon-info__title'>{name}</h2>
            <div className='pokemon-info__image-container'>
                <img
                    className='pokemon-info__image_default'
                    src={imageDefault}
                    alt={name}
                />
                <img
                    className='pokemon-info__image_shiny'
                    src={imageShiny}
                    alt={`Shiny ${name}`}
                />
            </div>
            <div className='pokemon-info__text-container'>
                <p>Base experience: {baseExp}</p>
                <p>Height: {height}0cm</p>
                <p>Weight: {weight}00gr</p>
                {abilities.length > 0 && (
                    <div>
                        <p>Abilities:</p>
                        <ul>
                            {abilities.map((ability, index) => (
                                <li key={index}>
                                    {ability}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {moves.length > 0 && (
                    <div>
                        <p>Moves:</p>
                        <ul>
                            {moves.map((move, index) => (
                                <li key={index}>
                                    {move}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PokemonInfo;