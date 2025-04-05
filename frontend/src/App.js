import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Bienvenido a ZapatillasAPP</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Nuestras Zapatillas</h2>
          <p className="text-lg text-gray-600">Explora nuestra amplia gama de zapatillas deportivas de las mejores marcas.</p>
          
          {/* Card de ejemplo */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/150" alt="Zapatilla" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Zapatilla Deportiva</h3>
              <p className="text-gray-500">Ideal para correr y entrenar.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-blue-600">$50.00</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 ZapatillasAPP. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

