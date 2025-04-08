import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles.css';

export default function ViewZapatillas() {
  const [zapatillas, setZapatillas] = useState([]);
  const navigate = useNavigate();

  // Función para obtener todas las zapatillas
  const fetchZapatillas = async () => {
    try {
      const res = await fetch("http://localhost:8080/zapatillas");
      const data = await res.json();
      setZapatillas(data);
    } catch (error) {
      console.error("Error fetching zapatillas:", error);
    }
  };

  // Función para eliminar una zapatilla
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/zapatillas/${id}`, { method: "DELETE" });

      if (res.ok) {
        alert("Zapatilla eliminada con éxito");
        fetchZapatillas();
      } else {
        alert("Error al eliminar zapatilla");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de red al eliminar zapatilla");
    }
  };

  useEffect(() => {
    fetchZapatillas();
  }, []);

  return (
    <div className="zapatillas-list-container">
      <h2>Lista de Zapatillas</h2>
      {zapatillas.length > 0 ? (
        zapatillas.map((zapatilla) => (
          <div key={zapatilla.id} className="zapatilla-item">
            <p><strong>{zapatilla.nombre}</strong></p>
            <p>Marca: {zapatilla.marca}</p>
            <p>Precio: ${zapatilla.precio}</p>
            <p>Cantidad: {zapatilla.cantidad}</p>
            <p>Talle: {zapatilla.talle}</p>
            <p>Descripción: {zapatilla.descripcion}</p>

            <button
              onClick={() => navigate(`/zapatillas/editar/${zapatilla.id}`)} 
              className="update-button"
            >
              Editar
            </button>

            <button
              onClick={() => handleDelete(zapatilla.id)}
              className="delete-button"
            >
              Eliminar
            </button>
          </div>
        ))
      ) : (
        <p>No hay zapatillas disponibles</p>
      )}
    </div>
  );
}
