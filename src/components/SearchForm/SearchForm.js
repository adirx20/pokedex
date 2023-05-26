import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import Preloader from '../Preloader/Preloader';
import { fetchPokemonData } from '../../utils/api';

function SearchForm() {
    const [inputValue, setInputValue] = useState('');
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (pokemonName !== '') {
            setIsLoading(true);
            fetchPokemonData({ pokemonName })
                .then((data) => {
                    setPokemonData(data);
                    setIsLoading(false);
                    console.log('pokemon data: ', pokemonData);
                })
                .catch((error) => {
                    console.log('Error fetching Pokemon data: ', error);
                    setIsLoading(false);
                });
        }
    }, [pokemonName]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemonName(inputValue);
        // Handle form submission, such as fetching data
        console.log('Submit form:', pokemonName);
    };

    return (
        <div className='search-form'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    className='form__input'
                    type="text"
                    value={inputValue}
                    placeholder="Enter pokemon name"
                    onChange={handleChange}
                />
                <button
                    className='form__button'
                    type="submit"
                >
                    Search
                </button>
            </form>

            {
                isLoading
                    ? (
                        <Preloader />
                    ) : (
                        <PokemonInfo
                            pokemonName={pokemonName}
                            pokemon={pokemonData}
                        />
                    )
            }
        </div>
    );
};

export default SearchForm;