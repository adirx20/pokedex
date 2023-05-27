import React from 'react';
import './Preloader.css';

function Preloader() {
    return (
        <div className='preloader'>
            <div className='preloader__spinner'></div>
            <div className='preloader__text'>
                Loading...
            </div>
        </div>
    );
}

export default Preloader;