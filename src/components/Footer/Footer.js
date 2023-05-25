import React from 'react';
import './Footer.css';
import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';

function Footer() {
    return (
        <footer className='footer'>
            <span className='footer__watermark'>
                &copy; {new Date().getFullYear()} Adir's PokeDex, powered by PokeAPI
            </span>
            <nav className='footer__navigation'>
                <div className='footer__link-container'>
                    <div className='footer__text-link-container'>
                        <a
                            className='footer__link'
                            href='/'
                        >
                            Home
                        </a>
                        {/* <a
                            className='footer__link'
                            href='https://practicum.com/en-isr/'
                            rel='noreferrer'
                            target='_blank'
                        >
                            Practicum
                        </a> */}
                        <a
                            className='footer__link footer__social-icon'
                            href='https://github.com/adirx20'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <img src={githubIcon} alt='GitHub icon' />
                        </a>
                        <a
                            className='footer__link footer__social-icon'
                            href='https://www.facebook.com/adir.sason'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <img src={facebookIcon} alt='Facebook icon' />
                        </a>
                    </div>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;