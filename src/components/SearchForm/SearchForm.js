import React, { useState } from 'react';
import './SearchForm.css';
import PokemonInfo from '../PokemonInfo/PokemonInfo';

function SearchForm() {
    const [inputValue, setInputValue] = useState('');
    const [searchType, setSearchType] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonName, setPokemonName] = useState('');

    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemonName(inputValue);
        // Handle form submission, such as fetching data
        console.log('Submit form:', searchType, searchTerm);
    };

    return (
        <div>
            <form className='search-form' onSubmit={handleSubmit}>
                {/* <select
            value={searchType}
            onChange={handleTypeChange}
          >
            <option value="name">Name</option>
            <option value="species">Species</option>
            <option value="ability">Ability</option>
          </select> */}
                <input
                    className='search-from__input'
                    type="text"
                    value={inputValue}
                    placeholder="Enter pokemon name"
                    onChange={handleChange}
                />
                <button
                    className='search-from__button'
                    type="submit"
                >
                    Search
                </button>
            </form>

            <PokemonInfo pokemonName={pokemonName} />
        </div>
    );
};

export default SearchForm;