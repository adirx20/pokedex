import React from 'react';

function PokemonCard({ pokemon }) {
    return (
        <div className='pokemon-card'>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>
                {pokemon.name}
            </h3>
            <p>
                Type: {pokemon.type}
            </p>
        </div>
    );
}

export default PokemonCard;