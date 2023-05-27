import React, { useState } from 'react';
import './PokemonInfo.css';

function PokemonInfo({ pokemonName, pokemon }) {
    const [showAllMoves, setShowAllMoves] = useState(false);

    if (pokemonName === '') {
        return <div className='pokemon-info__note'>No data</div>
    }

    if (!pokemon) {
        return <div className='pokemon-info__note'>
            Not found
        </div>;
    }

    const {
        id,
        name,
        height,
        weight,
    } = pokemon;

    const baseExp = pokemon.base_experience;

    const baseStat = pokemon.stats[0].base_stat;

    const type = pokemon.types
        ? pokemon.types.map((type) => type.type.name)
        : [];

    const imageDefaultFront = pokemon.sprites
        ? pokemon.sprites.front_default
        : '';

    const imageDefaultBack = pokemon.sprites
        ? pokemon.sprites.back_default
        : '';

    const imageShinyFront = pokemon.sprites
        ? pokemon.sprites.front_shiny
        : '';

    const imageShinyBack = pokemon.sprites
        ? pokemon.sprites.back_shiny
        : '';

    const imageArtwork = pokemon.sprites
        ? pokemon.sprites.other['official-artwork'].front_default
        : '';

    const abilities = pokemon.abilities
        ? pokemon.abilities.map((ability) => ability.ability.name)
        : [];

    const moves = pokemon.moves
        ? pokemon.moves.map((move) => move.move.name)
        : [];

    const displayedMoves = showAllMoves
        ? moves
        : moves.slice(0, 5);

    const handleToggleMoves = () => {
        setShowAllMoves(!showAllMoves);
    };


    return (
        <div
            className='pokemon-info'
            key={id}
        >
            <h2 className='pokemon-info__title'>{name}</h2>
            <div className='pokemon-info__info-container'>
                <div className='pokemon-info__image-container'>
                    <span className='pokemon-info__image-text'>
                        <img
                            className='pokemon-info__small-image'
                            src={imageDefaultFront}
                            alt={name}
                        />
                        Default {name} - front
                    </span>
                    <span className='pokemon-info__image-text'>
                        <img
                            className='pokemon-info__small-image'
                            src={imageDefaultBack}
                            alt={name}
                        />
                        Default {name} - back
                    </span>
                    <span className='pokemon-info__image-text'>
                        <img
                            className='pokemon-info__small-image'
                            src={imageShinyFront}
                            alt={`Shiny ${name}`}
                        />
                        Shiny {name} - front
                    </span>
                    <span className='pokemon-info__image-text'>
                        <img
                            className='pokemon-info__small-image'
                            src={imageShinyBack}
                            alt={name}
                        />
                        Default {name} - back
                    </span>
                </div>
                <div className='pokemon-info__text-container'>
                    <p className='pokemon-info__text'>
                        <span className='pokemon-info__text_bold'>
                            Pokemon ID:&nbsp;
                        </span>
                        {id}
                    </p>
                    <p className='pokemon-info__text'>
                        <span className='pokemon-info__text_bold'>
                            Type:&nbsp;
                        </span>
                        {type}
                    </p>
                    <p className='pokemon-info__text'>
                        <span className='pokemon-info__text_bold'>
                            Base stat:&nbsp;
                        </span>
                        {baseStat}
                    </p>
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
                            <ul className='pokemon-info__text-list'>
                                {abilities.map((ability, index) => (
                                    <li
                                        className='pokemon-info__text'
                                        key={index}
                                    >
                                        &#9889; {ability}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {moves.length > 0 && (
                        <div>
                            <p className='pokemon-info__text pokemon-info__text_bold'>
                                Moves:&nbsp;
                            </p>
                            <ul className='pokemon-info__text-list'>
                                {displayedMoves.map((move, index) => (
                                    <li
                                        className='pokemon-info__text'
                                        key={index}
                                    >
                                        &#9889; {move}
                                    </li>
                                ))}
                            </ul>
                            {moves.length > 5 && (
                                <button
                                    className='button__show-more'
                                    onClick={handleToggleMoves}
                                >
                                    {
                                        showAllMoves
                                            ? 'Show less'
                                            : 'Show more...'
                                    }
                                </button>
                            )}
                        </div>
                    )}
                </div>
                <img className='pokemon-info__artwork-image' src={imageArtwork} alt={`${name} artwork`} />
            </div>
        </div>
    );
}

export default PokemonInfo;