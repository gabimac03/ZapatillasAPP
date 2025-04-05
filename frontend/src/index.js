import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';  // Esto se importa para aplicar el CSS de Tailwind
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
