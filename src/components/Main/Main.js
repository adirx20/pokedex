import React, { useState } from 'react';
import PokemonInfo from './PokemonInfo/PokemonInfo';

function Main() {
  const [searchType, setSearchType] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as fetching data
    console.log('Submit form:', searchType, searchTerm);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="species">Species</option>
          <option value="ability">Ability</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button type="submit">Search</button>
      </form>

      <PokemonInfo searchType={searchType} searchTerm={searchTerm} />
    </main>
  );
}

export default Main;