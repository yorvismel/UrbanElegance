import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
          <li className="nav-item"><a href="/store">Store</a></li>
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
        <Link to="/login">
        <button className="login-button">Iniciar Sesión</button>
        </Link>
        <Link to='/register'>
        <button className="login-button">Registrarse</button>
        </Link>
        
      </div>
      <Link to='/cart' className="icon-cart">
                <FaShoppingCart />
              </Link>
    </header>
    
  );
}

export default Header;
