import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Archivo de estilos CSS personalizados
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Suscríbete al Boletín</h3>
            <p>Recibe nuestras últimas noticias directamente en tu correo.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Ingresa tu correo" />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Contacto</h3>
            <p>Dirección: Calle Ficticia, Ciudad Imaginaria</p>
            <p>Teléfono: +123 456 789</p>
            <div className="social-icons">
              <a href="#" className="icon">
                <FaFacebook />
              </a>
              <a href="#" className="icon">
                <FaTwitter />
              </a>
              <a href="#" className="icon">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
