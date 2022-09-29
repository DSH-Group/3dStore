import React from 'react';
import './SearchBar.css';

function SearchBar({placeholder, data}) {
  return (
    <div className="search">
        <div className="search__input">
            <input type="text" className="search__searchBox" placeholder={placeholder}/>
            <div className="search__icon">

            </div>
        </div>
        <div className="search__results">

        </div>
    </div>
  )
}

export default SearchBar