import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.css';
import App from './components/app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
