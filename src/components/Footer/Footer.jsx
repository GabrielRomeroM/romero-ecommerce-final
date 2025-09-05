import './Footer.css';

const Footer = ({ navigateTo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Sección 1: Información de la empresa */}
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-store"></i>
              SuperMarket
            </div>
            <p className="footer-description">
              Tu tienda de confianza para productos de supermercado con la mejor calidad y precios.
            </p>
            <div className="footer-contact">
              <p><i className="fas fa-envelope"></i> info@supermarket.com</p>
              <p><i className="fas fa-phone"></i> +1 (234) 567-890</p>
              <p><i className="fas fa-map-marker-alt"></i> Av. Principal 123, Ciudad</p>
            </div>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div className="footer-section">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Inicio</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('register'); }}>Registrarse</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>Iniciar Sesión</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Productos</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Ofertas</a></li>
            </ul>
          </div>

          {/* Sección 3: Categorías */}
          <div className="footer-section">
            <h3 className="footer-title">Categorías</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Lácteos</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Frutas y Verduras</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Panadería</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Bebidas</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Limpieza</a></li>
            </ul>
          </div>

          {/* Sección 4: Redes sociales y newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Síguenos</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
            
            <div className="newsletter">
              <h4>Suscríbete a nuestro newsletter</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="copyright">
            &copy; {currentYear} SuperMarket - Todos los derechos reservados. 
            <span> Diseñado con ❤️ por Romero</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;