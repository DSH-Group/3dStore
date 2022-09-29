import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
import Header from './Header.js';
import Body from './Body.js';

const header = ReactDOM.createRoot(document.getElementById('3dStore__header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const body = ReactDOM.createRoot(document.getElementById('3dStore__body'));
body.render(
  <React.StrictMode>
  <Body />
  </React.StrictMode>
)

         