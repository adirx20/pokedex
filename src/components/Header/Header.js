import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ children }) {
    const navigate = useNavigate();

    return (
        <header className='header'>
            <h2
                className='header__site-title'
                onClick={
                    () => navigate('/')
                }
            >
                PokéDex
            </h2>
            {children}
        </header>
    );
}

export default Header;