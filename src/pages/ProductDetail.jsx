// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import guitarsData from "../data/guitars.json";
import "../styles/ProductDetail.css";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = guitarsData.find((g) => g.id === id);

  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    if (product) {
      setMainImage(product.image || "");
    }
  }, [product]);

  if (!product) {
    return (
      <div className="product-not-found container">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <section className="product-detail container">
      <div className="product-detail-grid">
        {/* GALERÍA */}
        <div className="pd-gallery">
          <div className="pd-main-image" role="img" aria-label={product.name}>
            <img src={mainImage} alt={product.name} />
          </div>

          <div className="pd-thumbs" aria-hidden={false}>
            <button
              className={`pd-thumb ${
                mainImage === product.image ? "active" : ""
              }`}
              onClick={() => setMainImage(product.image)}
            >
              <img src={product.image} alt={`${product.name} frontal`} />
            </button>

            {product.imageBack && (
              <button
                className={`pd-thumb ${
                  mainImage === product.imageBack ? "active" : ""
                }`}
                onClick={() => setMainImage(product.imageBack)}
              >
                <img src={product.imageBack} alt={`${product.name} trasera`} />
              </button>
            )}
          </div>
        </div>

        {/* INFO */}
        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>
          <p className="pd-brand">{product.brand}</p>
          <p className="pd-category">
            Categoría: <strong>{product.category}</strong>
          </p>

          <div className="pd-price">
            ${Number(product.price).toLocaleString()}
          </div>

          <div className="pd-actions">
            <button
              className="btn btn-primary"
              onClick={() => (addToCart ? addToCart(product) : null)}
              aria-label={`Agregar ${product.name} al carrito`}
            >
              🛒 Agregar al carrito
            </button>
          </div>

          <div className="pd-description">
            <h3>Descripción</h3>
            <p>
              {product.description ||
                "Una guitarra de excelente calidad, perfecta para todo tipo de músicos."}
            </p>

            <ul className="pd-meta">
              <li>
                <strong>Marca:</strong> {product.brand}
              </li>
              <li>
                <strong>Stock:</strong> {product.stock ?? "N/A"}
              </li>
              <li>
                <strong>Colores:</strong> {(product.colors || []).join(", ")}
              </li>
              <li>
                <strong>Valoración:</strong> {product.rating ?? "—"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

