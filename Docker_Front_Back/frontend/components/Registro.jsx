import React, { useState } from 'react';
import '../styles/styles.css';
import { API_URLS } from '/src/utils/API_URLS';

function Registro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showLoginButton, setShowLoginButton] = useState(false);

  const handleRegistro = async () => {
    try {
      const response = await fetch(API_URLS.registroEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage('Usuario registrado exitosamente');
        setShowLoginButton(true);
      } else {
        setMessage('El usuario ya existe o hay un problema');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      setMessage('Error al registrar');
    }
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <div className="form-group">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          className="form-input"
          type="text"
          id="username"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          className="form-input"
          type="password"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {!showLoginButton && (
        <div className="form-group">
          <button className="form-button" onClick={handleRegistro}>
            Registrarse
          </button>
        </div>
      )}
      {message && <p>{message}</p>}
      {showLoginButton && (
        <div className="form-group">
          <button className="form-button" onClick={handleLoginRedirect}>
            Ir al Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Registro;
