import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Asegúrate de que este archivo contenga CSS válido
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
