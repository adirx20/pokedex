import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';

function Main() {

  return (
    <main className='main'>
      <h2 className='main__title'>
        Welcome to the Pokémon Search
      </h2>
      <p className='main__text'>
        Explore the world of Pokémon and search for your favorite Pokémon below!
      </p>
      <SearchForm />
    </ main>
  );
}

export default Main;