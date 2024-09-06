import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';  
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear el root de React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

