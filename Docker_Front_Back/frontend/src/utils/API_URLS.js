// API_URLS.js

const API_BASE_URL = 'http://localhost:8000/querys_forest'; // Asegúrate de que esta sea la URL correcta de tu backend

export const API_URLS = {
  helloEndpoint: `${API_BASE_URL}/api/hello/`,
  registroEndpoint: `${API_BASE_URL}/api/registro/`,
  loginEndpoint: `${API_BASE_URL}/api/login/`,
  graficaEndpoint: `${API_BASE_URL}/api/population_data/`,
  // Otras rutas...
};
