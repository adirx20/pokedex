import React from 'react';
import PokemonInfo from '../PokemonInfo/PokemonInfo';

function App() {
  return (
    <div className='App'>
      <h1>PokeDex</h1>
      <PokemonInfo searchType='name' searchTerm='pikachu' />
      {/* add more components and content as needed */}
    </div>
  );
}

export default App;