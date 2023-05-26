import React from 'react';
import './About.css';
import pokedexImage from '../../images/pokedex-image.png';

function About() {
    return (
        <section className='about'>
            <img className='about__image' src={pokedexImage} />
            <article className='about__text-container'>
                <h2 className='about__title'>About PokeDex</h2>
                <p className='about__text'>
                    A Pokédex is an electronic device used by Pokémon trainers to catalog information about various Pokémon species.
                    It provides details such as their abilities, moves, types, and more.
                </p>
                <p className='about__text'>
                    This PokeDex web application is built using React,
                    a popular JavaScript library for building user interfaces.
                </p>
                <p className='about__text'>
                    Feel free to explore the different Pokémon by searching their names and discover interesting information about them!
                </p>
            </article>
        </section>
    );
};

export default About;