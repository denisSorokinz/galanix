import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/main.sass";

// ! - element exists
const root = document.querySelector("#root")!;

ReactDOM.render(<App />, root);