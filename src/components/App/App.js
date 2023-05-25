import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import Footer from '../Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <BrowserRouter>
      <div className='app'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header>
            <Navigation />
          </Header>
          <Routes>
            <Route
              index
              path='/'
              element={
                <Main />
              }
            />
          </Routes>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;