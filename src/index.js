import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import PageTitle from './components/PageTitle';
import CardSimples from './components/CardSimples';

ReactDOM.render(<NavBar />, document.getElementById('menu-lateral'));
ReactDOM.render(<PageTitle />, document.getElementById('titulo'));
ReactDOM.render(<CardSimples />, document.getElementById('card-simples-1'));
ReactDOM.render(<CardSimples />, document.getElementById('card-simples-2'));
ReactDOM.render(<CardSimples />, document.getElementById('card-simples-3'));
ReactDOM.render(<CardSimples />, document.getElementById('card-simples-4'));

