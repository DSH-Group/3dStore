import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
import SearchBar from './Header-searchBar.js';
import Account from './Header-AccountIcon.js';
import Body from './Body.js';

const header__searchBar = ReactDOM.createRoot(document.getElementById('3dStore__Header-SearchBar'));
header__searchBar.render(
  <React.StrictMode>
    <SearchBar />
  </React.StrictMode>
);

const header__accountIcon = ReactDOM.createRoot(document.getElementById('3dStore__Header-Account'));
header__accountIcon.render(
  <React.StrictMode>
    <Account />
  </React.StrictMode>
);

const body = ReactDOM.createRoot(document.getElementById('3dStore__body'));
body.render(
  <React.StrictMode>
  <Body />
  </React.StrictMode>
)

         