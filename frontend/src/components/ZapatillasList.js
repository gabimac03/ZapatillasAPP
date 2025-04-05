import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ZapatillasList = () => {
  const [zapatillas, setZapatillas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/zapatillas')
      .then(response => {
        setZapatillas(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener las zapatillas", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Zapatillas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {zapatillas.map(zapatilla => (
          <div key={zapatilla.id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl">{zapatilla.nombre}</h2>
            <p className="text-gray-500">{zapatilla.marca}</p>
            <p className="text-gray-700">Color: {zapatilla.color}</p>
            <p className="font-bold">Precio: ${zapatilla.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZapatillasList;
