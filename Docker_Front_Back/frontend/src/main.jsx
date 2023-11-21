import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from '../components/Registro'
import Login from '../components/Login'; 
import { API_URLS } from '/src/utils/API_URLS';
import DosContenedores from '../components/Doscontenedores.jsx';

function Main() {
  const path = window.location.pathname;

  if (path === '/querys_forest/api/registro/') {
    return <Registro />;
  }else if (path === '/querys_forest/api/login/') {
    return <Login />;
  }else if (path === '/querys_forest/api/grafica/') {
    return <DosContenedores />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
