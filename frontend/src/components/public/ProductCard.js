import React, { useState } from 'react';

function ProductCard({ id, title, category, price, originalPrice, discount, tag }) {
  const [ventaRealizada, setVentaRealizada] = useState(false);

  const realizarVenta = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/ventas?zapatillaNombre=${title}&cantidad=1`, {
        method: 'POST'
      });

      if (res.ok) {
        setVentaRealizada(true);
        alert("¡Venta realizada con éxito!");
      } else {
        const err = await res.text();
        alert(`Error: ${err}`);
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      alert("No se pudo realizar la venta.");
    }
  };

  return (
    <div className="product-card fade-in" style={{ animationDelay: '0.3s' }}>
      {tag && <span className="card-tag">{tag}</span>}
      <div className="img-container">
        <img src="/api/placeholder/400/320" alt="Zapatilla" className="product-img" />
        <div className="card-overlay"></div>
        <button className="quick-view">Vista Rápida</button>
      </div>
      <div className="card-content">
        <div className="rating">
          <span className="star">★</span><span className="star">★</span>
          <span className="star">★</span><span className="star">★</span>
          <span className="star">☆</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
        <div className="price-row">
          <div>
            <span className="price">${price}</span>
            {originalPrice && <span className="original-price">${originalPrice}</span>}
          </div>
          {discount && <span>{discount}% OFF</span>}
        </div>
        <div className="card-actions">
          <button
            className="add-cart-btn"
            onClick={realizarVenta}
            disabled={ventaRealizada}
          >
            {ventaRealizada ? "Vendida" : "Vender"}
          </button>
          <button className="wishlist-btn">
            <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
