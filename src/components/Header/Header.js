import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ children }) {
    const navigate = useNavigate();

    return (
        <header className='header'>
            <span
                className='header__site-title'
                onClick={
                    () => navigate('/')
                }
            >
                PokeDex
            </span>
            {children}
        </header>
    );
}

export default Header;