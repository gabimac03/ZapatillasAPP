import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import AddZapatilla from "../components/admin/AddZapatilla";
import ViewZapatillas from '../components/admin/ViewZapatillas';
import ContactForm from "../components/public/ContacForm";

export default function AppRoutes() {
  const [zapatillas, setZapatillas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/zapatillas")
      .then((res) => res.json())
      .then(setZapatillas)
      .catch((err) => console.error("Error cargando zapatillas:", err));
  }, []);

  const addToCart = (zapatilla) => {
    setCart([...cart, zapatilla]);
  };

  const handlePurchase = () => {
    cart.forEach((z) => {
      fetch(`http://localhost:8080/zapatillas/vender/${z.id}`, {
        method: "PUT",
      });
    });
    setCart([]);
    setZapatillas(
      zapatillas.map((z) => {
        const itemsSold = cart.filter((c) => c.id === z.id).length;
        return itemsSold > 0
          ? { ...z, cantidad: z.cantidad - itemsSold, ventas: z.ventas + itemsSold }
          : z;
      })
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              zapatillas={zapatillas}
              cart={cart}
              addToCart={addToCart}
              handlePurchase={handlePurchase}
            />
          }
        />
        <Route path="/admin" element={<AddZapatilla />} />
        <Route path="/admin" element={<ViewZapatillas />} />
        <Route path="/admin" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}
