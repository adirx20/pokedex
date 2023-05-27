import React from 'react';
import './PokemonInfo.css';

function PokemonInfo({ pokemonName, pokemon }) {
    if (pokemonName === '') {
        return <div>No data</div>
    }

    if (!pokemon) {
        return <div>Not found</div>;
    }

    const id = pokemon.id;
    const name = pokemon.name;
    const height = pokemon.height;
    const weight = pokemon.weight;
    const baseExp = pokemon.base_experience;

    const imageDefault = pokemon.sprites
        ? pokemon.sprites.front_default
        : '';

    const imageShiny = pokemon.sprites
        ? pokemon.sprites.front_shiny
        : '';

    const abilities = pokemon.abilities
        ? pokemon.abilities.map((ability) => ability.ability.name)
        : [];

    const moves = pokemon.moves
        ? pokemon.moves.map((move) => move.move.name)
        : [];


    return (
        <div
            className='pokemon-info'
            key={id}
        >
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
                <p className='pokemon-info__text'>
                    <span className='pokemon-info__text_bold'>
                        Base experience:&nbsp;
                    </span>
                    {baseExp}
                </p>
                <p className='pokemon-info__text'>
                    <span className='pokemon-info__text_bold'>
                        Height:&nbsp;
                    </span>
                    {height}0cm
                </p>
                <p className='pokemon-info__text'>
                    <span className='pokemon-info__text_bold'>
                        Weight:&nbsp;
                    </span>
                    {weight}00gr
                </p>
                {abilities.length > 0 && (
                    <div>
                        <p className='pokemon-info__text pokemon-info__text_bold'>
                            Abilities:&nbsp;
                            </p>
                        <ul>
                            {abilities.map((ability, index) => (
                                <li
                                    className='pokemon-info__text'
                                    key={index}
                                >
                                    {ability}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {moves.length > 0 && (
                    <div>
                        <p className='pokemon-info__text_bold'>
                            Moves:&nbsp;
                            </p>
                        <ul>
                            {moves.map((move, index) => (
                                <li
                                    className='pokemon-info__text'
                                    key={index}
                                >
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