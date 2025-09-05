import { Link } from "react-router-dom";
import { products } from "../../data/products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a SuperMarket</h1>
        <p>Descubre los mejores productos para tu hogar al mejor precio</p>
      </section>

      <h2 className="section-title">Nuestros Productos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-stock">
                {product.stock > 0 ? `En stock: ${product.stock}` : "Agotado"}
              </p>
              <p className="product-code">Código: {product.code}</p>
              <Link to={`/product/${product.id}`} className="btn btn-details">
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
