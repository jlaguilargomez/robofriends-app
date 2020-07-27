import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';

// Debemos importarlo con 'destructuring' porque en este caso son múltiples los datos que pueden venir del archivo seleccionado
import { robots } from './core/robots/robots';


import CardList from './components/card-list/CardList';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
