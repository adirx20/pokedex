import React from 'react';
import './SearchForm.css';

function SearchForm() {
    const [value, setValue] = React.useState();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form className='search-form'>
            <input
                className='search-form__input'
                type='text'
                placeholder='Enter topic'
            />
            <button
                className='search-form__button'
                type='submit'>
                Search
            </button>
        </form>
    );
};

export default SearchForm;