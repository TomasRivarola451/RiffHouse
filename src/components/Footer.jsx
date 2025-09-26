import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Columnas de enlaces */}
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Acerca de nosotros</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreras</a></li>
              <li><a href="#">Soporte técnico</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Cursos</h4>
            <ul>
              <li><a href="#">Guitarra Eléctrica</a></li>
              <li><a href="#">Acústica</a></li>
              <li><a href="#">Producción Musical</a></li>
              <li><a href="#">Composición</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter">
            <h4>GuitarLab Newsletter</h4>
            <p>Suscríbete para recibir novedades</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Tu email" />
              <button type="submit">→</button>
            </form>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RiffHouse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
