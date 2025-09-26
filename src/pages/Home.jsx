import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import FeaturedCarousel from "../components/FeaturedCarousel";
import "../styles/Home.css";
import Contact from "./Contact.jsx";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSlider />

      {/* Categorías */}
      <section className="categories section container">
        <div className="categories-grid">
          <Link to="/shop?filter=electrica" className="category-card">
            <img src="/images/SeccionElectrica.jpg" alt="Eléctrica" />
            <div className="category-label">Eléctrica</div>
          </Link>

          <Link to="/shop?filter=acustica" className="category-card">
            <img src="/images/SeccionAcustica.jpg" alt="Acústica" />
            <div className="category-label">Acústica</div>
          </Link>

          <Link to="/shop?filter=criolla" className="category-card">
            <img src="/images/SeccionClasica.jpg" alt="Criolla" />
            <div className="category-label">Criolla</div>
          </Link>
        </div>
      </section>

      {/* Carrusel */}
      <FeaturedCarousel />

      {/* Banner */}
      <div className="banner-container">
        <img
          src="https://images.ctfassets.net/3xaxfhpie9jb/2Z1H3aXwcF1bQAoOePuDhJ/f8e4f2a1976e0b850d2633436ef7ea37/cvt-desktop.webp"
          alt="Banner"
          className="banner-img"
        />
        <div className="banner-text">
          <h2>El sonido que inspira tu música</h2>
          <p>Guitarras diseñadas para acompañar cada acorde de tu historia.</p>
        </div>
      </div>

      {/* Cursos */}
      <section className="courses section">
        <div className="container">
          <h2>Aprende con nosotros</h2>
          <p className="courses-subtitle">
            Cursos online de guitarra, desde lo básico hasta técnicas avanzadas.
          </p>

          <div className="courses-grid">
            <div className="course-card">
              <img src="/images/curhome1.webp" alt="Guitarra desde cero" />
              <div className="course-info">
                <h3>Guitarra desde cero</h3>
                <p>Acordes básicos, rasgueos y tus primeras canciones.</p>
                <Link to="/courses" className="btn btn-dark">
                  Ver plan
                </Link>
              </div>
            </div>

            <div className="course-card">
              <img src="/images/curhome3.webp" alt="Ritmos y técnicas de Rock" />
              <div className="course-info">
                <h3>Ritmos y técnicas de Rock</h3>
                <p>Potencia tu técnica con riffs, escalas y solos de rock.</p>
                <Link to="/courses" className="btn btn-dark">
                  Ver plan
                </Link>
              </div>
            </div>

            <div className="course-card">
              <img src="/images/curhome2.webp" alt="Improvisación y solos avanzados" />
              <div className="course-info">
                <h3>Improvisación y solos</h3>
                <p>Modos, bending, tapping y shred para llevar tu técnica al límite.</p>
                <Link to="/courses" className="btn btn-dark">
                  Ver plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
