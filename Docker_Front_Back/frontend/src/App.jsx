// En tu componente React en el frontend
import React, { useEffect, useState } from 'react';
import { API_URLS } from '/src/utils/API_URLS';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cover.css';
function App() {

    return (
        <div className="part d-flex h-100 text-center text-white bg-dark">
          <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
              <div>
                <h3 className="float-md-start mb-0">Forest</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                  <a className="nav-link" href="#">Login</a>
                  <a className="nav-link" href="#">Signup</a>
                </nav>
              </div>
            </header>
          
            <main className="px-3">
              <h1>US Forest Service Forest Inventory and Analysis National Program.</h1>
              <p className="lead">Create By: Julian Andres Rodriguez Gomez.</p>
            </main>
          </div>
        </div>
      );
    /*const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(API_URLS.loginEndpoint) // La URL depende de tu configuración de rutas en Django
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Mensaje del Backend:</h1>
            <p>{message}</p>
        </div>
    );*/
}

export default App;

