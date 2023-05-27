import React from 'react';
import { useNavigate } from 'react-router';
import './Navigation.css';

function Navigation({ children }) {
    const navigate = useNavigate();

    function navigateToMain() {
        navigate('/');
        // onClose
    }

    function navigateToPokemonList() {
        navigate('/pokemon-list');
        // onClose
    }

    function navigateToAbout() {
        navigate('/about');
        // onClose
    }

    return (
        <nav className='navigation'>
            <button
                className='navigation__menu-button'
                onClick={navigateToMain}
            >
                Home
            </button>
            {/* <button
                className='navigation__menu-button'
                onClick={navigateToPokemonList}
            >
                All Pokémons
            </button> */}
            <button
                className='navigation__menu-button'
                onClick={navigateToAbout}
            >
                About
            </button>
            {children}
        </nav>
    );
};

export default Navigation;