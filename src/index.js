import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'ModalContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);

