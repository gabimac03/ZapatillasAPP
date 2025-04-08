import React, { useState, useEffect } from "react";
import '../../styles.css';

export default function AddZapatilla() {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [talle, setTalle] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [zapatillas, setZapatillas] = useState([]); // Estado para almacenar las zapatillas

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

  // Función para agregar una nueva zapatilla
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaZapatilla = {
      nombre,
      marca,
      precio,
      cantidad,
      talle,
      categoria,
      descripcion,
    };

    try {
      const res = await fetch("http://localhost:8080/zapatillas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaZapatilla),
      });

      if (res.ok) {
        alert("Zapatilla guardada con éxito");
        setNombre("");
        setMarca("");
        setPrecio(0);
        setCantidad(0);
        setTalle("");
        setCategoria("");
        setDescripcion("");
        fetchZapatillas(); // Actualizar lista después de agregar una zapatilla
      } else {
        alert("Error al guardar zapatilla");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de red al guardar zapatilla");
    }
  };

  // Función para actualizar una zapatilla
  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await fetch(`http://localhost:8080/zapatillas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        alert("Zapatilla actualizada con éxito");
        fetchZapatillas(); // Actualizar lista después de la actualización
      } else {
        alert("Error al actualizar zapatilla");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de red al actualizar zapatilla");
    }
  };

  // Función para eliminar una zapatilla
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/zapatillas/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Zapatilla eliminada con éxito");
        fetchZapatillas(); // Actualizar lista después de la eliminación
      } else {
        alert("Error al eliminar zapatilla");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de red al eliminar zapatilla");
    }
  };

  // Obtener zapatillas al cargar el componente
  useEffect(() => {
    fetchZapatillas();
  }, []);

  return (
    <div className="form-container">
      <h2 className="title">Agregar nueva zapatilla</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Formulario para agregar una zapatilla */}
        <div className="input-group">
          <label className="label" htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="marca">Marca</label>
          <input
            id="marca"
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="precio">Precio</label>
          <input
            id="precio"
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            className="input"
            required
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            className="input"
            required
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="talle">Talle</label>
          <input
            id="talle"
            type="text"
            placeholder="Talle"
            value={talle}
            onChange={(e) => setTalle(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="categoria">Categoría</label>
          <input
            id="categoria"
            type="text"
            placeholder="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="input"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Guardar
        </button>
      </form>

      {/* Botón para ver todas las zapatillas */}
      <button onClick={fetchZapatillas} className="view-button">
        Ver todas las zapatillas
      </button>
    </div>
  );
}

