import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
import SearchBar from './Header.js';
import Body from './Body.js';

const header__searchBar = ReactDOM.createRoot(document.getElementById('3dStore__Header-SearchBar'));
header__searchBar.render(
  <React.StrictMode>
    <SearchBar />
  </React.StrictMode>
);

const body = ReactDOM.createRoot(document.getElementById('3dStore__body'));
body.render(
  <React.StrictMode>
  <Body />
  </React.StrictMode>
)

         