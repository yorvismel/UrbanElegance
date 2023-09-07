import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HeaderStore = () => {
    const auth = useAuth()
    const navigate = useNavigate(); 
  const { displayName } = auth.user;

  const handleLogout = () => {
    auth.logout();
    navigate('/')
  };
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
          <li className="nav-item"><a href="/create">Create Products</a></li>
          <li className="nav-item"><a href="#link3">Enlace</a></li>
          <li className="nav-item"><a href="#link4">Enlace</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Buscar" />
        <button className="search-button">Buscar</button>
      </div>
      <div className="login">
        {/* <Link to="/login">
        <button className="login-button">{displayName}</button>
        </Link> */}
        
        {/* <button className="login-button">Registrarse</button> */}
        <button className="login-button" onClick={() => handleLogout()} >Logout</button>
        
        
      </div>
      <Link to='/cart' className="icon-cart">
                <FaShoppingCart />
              </Link>
    </header>
    
  );
}

export default HeaderStore;
