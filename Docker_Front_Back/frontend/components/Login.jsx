import React, { useState } from 'react';
import '../styles/styles.css';
import { API_URLS } from '/src/utils/API_URLS';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      console.log("Datos enviados:", { username, password });
      const response = await fetch(API_URLS.loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        
      });
      if (response.ok) {
        setMessage('Inicio de sesión exitoso');
        // Aquí podrías redirigir al usuario a la página que desees después del inicio de sesión
        window.location.href = '/querys_forest/api/hello/'; // Reemplaza '/dashboard' con la ruta correcta
      } else {
        setMessage('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setMessage('Error al iniciar sesión');
    }
  };

  return (
    <form className="form-container" onSubmit={handleLogin}>
   <h2>Iniciar Sesión</h2>
   <div className="form-group">
      <label htmlFor="username">Nombre de usuario</label>
      <input
      className="form-input"
      type="text"
      id="username"
      name="username"  // Atributo name para identificar el campo en el backend
      placeholder="Nombre de usuario"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      autoComplete="username"
      />
   </div>
   <div className="form-group">
      <label htmlFor="password">Contraseña</label>
      <input
      className="form-input"
      type="password"
      id="password"
      name="password"  // Atributo name para identificar el campo en el backend
      placeholder="Contraseña"
      autoComplete="current-password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
   </div>
   <div className="form-group">
      <button className="form-button" type="submit">
      Iniciar Sesión
      </button>
   </div>
   {message && 
   <p>{message}</p>
   }
</form>
    
  );
}

export default Login;
