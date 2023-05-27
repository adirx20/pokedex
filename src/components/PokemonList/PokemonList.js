import React, { useState, useEffect } from 'react';
import {
    getPokemonList,
    getAllPokemons,
    getPokemonByUrl
} from '../../utils/api';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonUrlList, setPokemonUrlList] = useState([]);
    const [pokemonDb, setPokemonDb] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const pokemons = [];

    useEffect(() => {
        getPokemonList()
            .then((res) => {
                const pokemonUrls = res.map((p) => p.url);

                console.log('list: ', pokemonUrls);
                return pokemonUrls.map((url) => getPokemonByUrl(url))
                // setPokemonUrlList(pokemonUrls);
            })
            .catch((err) => {
                console.log('error: ', err);
            });
    }, []);



    // useEffect(() => {
    //     getPokemonList()
    //         .then((data) => {
    //             setPokemonList(data.results);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => {
    //             setError(err);
    //             setIsLoading(false);
    //         });
    // }, []);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    return (
        <div className="pokemon-list">
            {pokemonList.map((pokemon) => (
                <div className="pokemon-card" key={pokemon.id}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h3>{pokemon.name}</h3>
                    {/* Add other information or styling for the Pokemon card */}
                </div>
            ))}
        </div>
    );
}

export default PokemonList;