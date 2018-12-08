import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import notes from './datafiles/Notes/notes';
import montakurssia from './components/Kurssi/montakurssia';
import persons from './datafiles/PhoneBook/persons';
import './components/AxiosDemos/AxiosDemos.js';

console.log("Index.js loading");
//const kala=AxiosInitialFetchPersons;

//console.log("Index.js axios kala", kala);


ReactDOM.render(
  <App notes={notes} kurssit={montakurssia} persons={persons}/>,
  document.getElementById('root')
);
//  <App notes={notes} kurssit={montakurssia} persons={persons}/>,
