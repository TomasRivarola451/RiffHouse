import React, { useState } from "react";
import "../styles/Filtro.css"

export default function Filtro({ onFilter }) {
  const [active, setActive] = useState("todas");

  const handleClick = (tipo) => {
    setActive(tipo);
    onFilter(tipo);
  };

  return (
    <div className="filtro-container">
      {["todas", "electrica", "acustica", "criolla"].map((tipo) => (
        <button
          key={tipo}
          className={`filtro-btn ${active === tipo ? "activo" : ""}`}
          onClick={() => handleClick(tipo)}
        >
          {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
        </button>
      ))}
    </div>
  );
}
