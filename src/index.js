import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Index.css';
import App from './components/App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
