import React from 'react';
import Main from '../Main/Main';
import PokemonInfo from '../PokemonInfo/PokemonInfo';

function App() {
  return (
    <div className='App'>
      <h1>PokeDex</h1>
      <Main />
      {/* <PokemonInfo searchType='name' searchTerm='pikachu' /> */}
      {/* add more components and content as needed */}
    </div>
  );
}

export default App;