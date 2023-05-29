import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import About from '../About/About';
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
            {/* <Route
              path='/pokemon-list'
              element={
                <PokemonList />
              }
            /> */}
            <Route
              path='/about'
              element={
                <About />
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