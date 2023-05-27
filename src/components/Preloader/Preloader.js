import React from 'react';
import './Preloader.css';
import preloaderIcon from '../../images/preloader-mew-icon.gif';

function Preloader() {
    return (
        <div className='preloader'>
            <img className='preloader__icon' src={preloaderIcon} alt='Loading...' />
            <div className='preloader__text'>
                Loading...
            </div>
        </div>
    );
}

export default Preloader;