import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn btn-primary">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link> &gt; {product.name}
      </nav>

      <div className="product-detail-content">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        <div className="product-info-container">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-stock">
            {product.stock > 0
              ? `En stock: ${product.stock} unidades`
              : "Producto agotado"}
          </p>
          <p className="product-detail-code">Código: {product.code}</p>
          <p className="product-detail-category">
            Categoría: {product.category}
          </p>

          <div className="product-detail-description">
            <h3>Descripción</h3>
            <p>{product.description}</p>
          </div>

          <button className="btn btn-primary btn-add-to-cart">
            <i className="fas fa-cart-plus"></i> Agregar al Carrito
          </button>

          <Link to="/" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i> Seguir Comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
