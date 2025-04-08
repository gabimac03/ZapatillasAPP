import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ necesario para redirigir
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import ProductCard from "../../components/public/ProductCard";
import Cart from "../../components/public/Cart";
import ContactForm from "../../components/public/ContacForm";

export default function HomePage({ zapatillas, addToCart, cart, handlePurchase }) {
  const { loginAsAdmin, loginAsUser } = useAuth();
  const navigate = useNavigate(); // ✅ inicializar hook de navegación

  const handleAdminLogin = () => {
    loginAsAdmin();
    navigate("/admin"); // ✅ redirige a la ruta del panel de admin
  };

  const handleUserLogin = () => {
    loginAsUser();
    // Si quisieras redirigir a otra vista de cliente, podrías hacerlo acá también
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={handleUserLogin}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Ingresar como Cliente
        </button>
        <button
          onClick={handleAdminLogin}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Ingresar como Administrador
        </button>
      </div>
      <main className="flex flex-col md:flex-row flex-grow">
        <section className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {zapatillas.map((z) => (
            <ProductCard key={z.id} zapatilla={z} addToCart={addToCart} />
          ))}
        </section>
        <Cart cart={cart} handlePurchase={handlePurchase} />
      </main>
      <ContactForm></ContactForm>
      <Footer />
    </div>
  );
}


