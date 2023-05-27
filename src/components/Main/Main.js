import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PokemonInfo from '../PokemonInfo/PokemonInfo';

function Main() {
  const [inputValue, setInputValue] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTypeChange = (e) => {
    setSearchType(e.target.value);
  }

  const handleTermChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    // Handle form submission, such as fetching data
    console.log('Submit form:', searchType, searchTerm);
  };

  return (
    <main className='main'>
      <SearchForm />
    </ main>
  );
}

export default Main;