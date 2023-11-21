import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { API_URLS } from '/src/utils/API_URLS';

function DosContenedores() {
  const [opciones, setOpciones] = useState({
    Countricode: false,
    SatateCode: false,
    EstimationUnit: false,
    LocationName: false,
  });

  const [data, setData] = useState([]);

  const handleDropdownChange = async (e) => {
    const { name, value } = e.target;
    setOpciones({
      ...opciones,
      [name]: value === 'true',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URLS.graficaEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(opciones),
        });

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [opciones]);

  const { Countricode, SatateCode, EstimationUnit, LocationName } = opciones;

  return (
    <div className="dos-contenedores">
      <div className="contenedor-izquierda">
        <h2>Opciones</h2>
        <div className="opciones-dropdown">
          <label>
            Countricode:
            <select
              name="Countricode"
              value={Countricode.toString()}
              onChange={handleDropdownChange}
            >
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </label>
          <label>
            SatateCode:
            <select
              name="SatateCode"
              value={SatateCode.toString()}
              onChange={handleDropdownChange}
            >
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </label>
          <label>
            Estimation Unit:
            <select
              name="EstimationUnit"
              value={EstimationUnit.toString()}
              onChange={handleDropdownChange}
            >
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </label>
          <label>
            Location Name:
            <select
              name="LocationName"
              value={LocationName.toString()}
              onChange={handleDropdownChange}
            >
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </label>
        </div>
      </div>
      <div className="contenedor-derecha">
        <h1>Mi Gráfica</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.county_code} - {item.location_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DosContenedores;
