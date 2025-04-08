
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5 16.5c0 2.5-2 4.5-4.5 4.5h-9L1 7l6-3h8l3.5 3.5c1.5 1.5 2 3.5 2 5.5v3.5z" />
            <path d="M6 12h12" />
            <path d="M6 16h8" />
          </svg>
          <span className="logo-text">QuickShoesMza</span>
        </div>
        <button className="mobile-menu-btn" id="mobile-menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <ul className="nav-links" id="nav-links">
          <li><a href="#" className="active">Inicio</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Comentarios</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
