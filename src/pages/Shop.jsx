import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import guitarsData from "../data/guitars.json";
import "../styles/Shop.css";


export default function Shop({ addToCart }) {
  const [guitars, setGuitars] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const filter = params.get("filter") || "todas";

  useEffect(() => {
    let data = guitarsData;

    if (filter && filter !== "todas") {
      data = guitarsData.filter(
        (g) => g.category.toLowerCase() === filter.toLowerCase()
      );
    }

    setGuitars(data);
  }, [filter]);

  const handleFilter = (categoria) => {
    if (categoria === "todas") {
      navigate("/shop");
    } else {
      navigate(`/shop?filter=${categoria}`);
    }
  };

  return (
    <section className="shop-page container">
      <h2 className="shop-title">Tienda de guitarras</h2>

      <div className="shop-categories">
        <button
          className={filter === "todas" ? "active" : ""}
          onClick={() => handleFilter("todas")}
        >
          Todas
        </button>
        <button
          className={filter === "electrica" ? "active" : ""}
          onClick={() => handleFilter("electrica")}
        >
          Eléctrica
        </button>
        <button
          className={filter === "acustica" ? "active" : ""}
          onClick={() => handleFilter("acustica")}
        >
          Acústica
        </button>
        <button
          className={filter === "criolla" ? "active" : ""}
          onClick={() => handleFilter("criolla")}
        >
          Criolla
        </button>
      </div>

      <div className="shop-grid">
        {guitars.map((g) => (
          <article key={g.id} className="product-card">
            <Link to={`/shop/${g.id}`} className="card-link" aria-label={g.name}>
              <div className="image-wrap">
                <img src={g.image} alt={g.name} className="product-image" />
              </div>
            </Link>

            <div className="product-body">
              <div className="tags">
                <button className="buy-btn" onClick={() => addToCart(g)}>
                  Comprar
                </button>
              </div>
              <h3 className="product-title">{g.name}</h3>
              <p className="product-brand">{g.brand}</p>
              <div className="product-meta">
                <span className="price">${Number(g.price).toLocaleString()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
