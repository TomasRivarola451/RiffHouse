import React from "react";
import "../styles/Cart.css";

export default function Cart({ isOpen, onClose, cartItems, updateQuantity, finalizePurchase }) {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay" role="dialog" aria-modal="true">
      <div className="cart-container">
        {/* Header con botón cerrar */}
        <div className="cart-header">
          <h2>Carrito</h2>
          <button className="close-btn" onClick={onClose} aria-label="Cerrar carrito">
            ✕
          </button>
        </div>

        {/* Lista de productos */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Tu carrito está vacío.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p className="item-price">${Number(item.price).toLocaleString()}</p>

                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label={`Disminuir cantidad de ${item.name}`}
                    >
                      -
                    </button>
                    <span className="qty">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label={`Aumentar cantidad de ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => updateQuantity(item.id, -item.quantity)}
                  aria-label={`Eliminar ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer con total */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <strong>${Number(total).toLocaleString()}</strong>
            </div>
            <button className="checkout-btn" onClick={finalizePurchase}>
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
