import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <h4>{product.name}</h4>
      <p className="brand">{product.brand}</p>
      <p className="price">${product.price}</p>
    </Link>
  );
}
