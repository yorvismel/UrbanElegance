import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>
            <img src={logo} alt="Logo" />
        </span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#link1">Enlace</a></li>
          <li className="nav-item"><a href="#link2">Enlace</a></li>
          <li className="nav-item"><a href="#link3">Enlace</a></li>
          <li className="nav-item"><a href="#link4">Enlace</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Buscar" />
        <button className="search-button">Buscar</button>
      </div>
      <div className="login">
        <button className="login-button">Iniciar Sesión</button>
        <button className="login-button">Registrarse</button>
      </div>
    </header>
  );
}

export default Header;
