import React from "react";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, handlePurchase }) => {
  const total = cart.reduce((acc, z) => acc + z.precio, 0);

  return (
    <aside className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg p-4 m-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">🛒 Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((z, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-xl"
            >
              <div>
                <p className="font-semibold">{z.nombre}</p>
                <p className="text-sm text-gray-600">${z.precio}</p>
              </div>
              {/* Botón de eliminar (opcional) */}
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 border-t pt-4">
        <p className="text-xl font-bold">Total: ${total}</p>
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl mt-4"
          onClick={handlePurchase}
        >
          Comprar
        </button>
      </div>
    </aside>
  );
};

export default Cart;
