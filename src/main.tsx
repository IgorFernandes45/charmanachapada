import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; // Importa o App.tsx que está fora da pasta src
import '../styles/globals.css'; // Se você tiver um arquivo de estilos global, adicione aqui

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);