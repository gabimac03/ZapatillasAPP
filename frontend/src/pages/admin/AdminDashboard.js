import React, { useEffect, useState } from "react";
import ZapatillaTable from "../../components/admin/ZapatillaTable";
import ZapatillaForm from "../../components/admin/AddZapatilla";

export default function AdminDashboard() {
  const [zapatillas, setZapatillas] = useState([]);
  const [selectedZapatilla, setSelectedZapatilla] = useState(null);

  useEffect(() => {
    fetchZapatillas();
  }, []);

  const fetchZapatillas = async () => {
    const response = await fetch("http://localhost:8080/zapatillas");
    const data = await response.json();
    setZapatillas(data);
  };

  const handleEdit = (zapatilla) => {
    setSelectedZapatilla(zapatilla);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/zapatillas/${id}`, {
      method: "DELETE",
    });
    fetchZapatillas();
  };

  const handleSave = async (zapatilla) => {
    const method = zapatilla.id ? "PUT" : "POST";
    const url = zapatilla.id
      ? `http://localhost:8080/zapatillas/${zapatilla.id}`
      : "http://localhost:8080/zapatillas";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(zapatilla),
    });

    setSelectedZapatilla(null);
    fetchZapatillas();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Panel de Administrador</h2>
      <ZapatillaForm zapatilla={selectedZapatilla} onSave={handleSave} />
      <ZapatillaTable
        zapatillas={zapatillas}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

