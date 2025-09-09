import ProductCard from '../../components/ProductCard/ProductCard'
import { products } from '../../data/products'
import './Home.css'

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
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  )
}

export default Home