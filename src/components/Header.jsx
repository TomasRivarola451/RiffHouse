import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import "../styles/Header.css";

export default function Header({ onCartOpen, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const headerClass = `rh-site-header ${scrolled || !isHome ? "scrolled" : ""}`;

  return (
    <header className={headerClass}>
      <div className="rh-container rh-header-inner">
        <Link to="/" className="rh-logo">RiffHouse</Link>

        <nav className="rh-main-nav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/shop">Tienda</NavLink>
          <NavLink to="/courses">Cursos</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </nav>

        <div className="rh-header-actions">
          <button className="rh-icon-btn" aria-label="Buscar">
            <FiSearch />
          </button>

          <button className="rh-icon-btn" aria-label="Carrito" onClick={onCartOpen}>
            <FiShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
