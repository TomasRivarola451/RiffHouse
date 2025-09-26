import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje, " + formData.nombre + "!");
    setFormData({ nombre: "", email: "", mensaje: "" }); // limpiar form
  };

  return (
    <section className="contact-section" id="contacto">
      <h2 className="contact-title">Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </section>
  );
}
