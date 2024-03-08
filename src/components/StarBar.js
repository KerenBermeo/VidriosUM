import React from 'react';
import logo from '../image/logo.png'; // Ajusta la ruta de la imagen según tu estructura de archivos

export const StarBar = () => {
  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars"></div>
        <a className="icon-logo" href="#home">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        <a href="#home" className="logo">
          Vidrios Seguridad UM
        </a>
        <nav className="navbar">
        <a href="#home">Inicio</a>
        <a href="#divisiones">Productos</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

