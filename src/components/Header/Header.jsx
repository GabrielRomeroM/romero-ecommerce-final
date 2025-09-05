import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  
  // Ejemplo: podrías obtener el count del carrito de un contexto o estado global
  const cartCount = 0 // Temporal - luego conectaremos con el carrito real

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="fas fa-store"></i>
            SuperMarket
          </Link>
          
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i> Inicio
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <i className="fas fa-user-plus"></i> Registro
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
              <li>
                <div className="cart-widget" onClick={() => navigate('/cart')}>
                  <i className="fas fa-shopping-cart"></i>
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header