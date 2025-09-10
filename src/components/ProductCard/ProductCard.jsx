import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className={`product-stock ${product.stock === 0 ? 'out-of-stock' : ''}`}>
          {product.stock > 0 ? `En stock: ${product.stock}` : 'Agotado'}
        </p>
        <p className="product-code">Código: {product.code}</p>
        <p className="product-category">{product.category}</p>
        
        {/* Cambio aquí: usar la nueva clase */}
        <Link 
          to={`/product/${product.id}`}
          className="product-details-link"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  )
}

export default ProductCard