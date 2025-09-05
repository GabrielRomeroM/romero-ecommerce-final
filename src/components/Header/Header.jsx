import './Header.css';

const Header = ({ cartCount, navigateTo }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => navigateTo('home')}>
            <i className="fas fa-store"></i>
            SuperMarket
          </div>
          
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
                  <i className="fas fa-home"></i> Inicio
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('register'); }}>
                  <i className="fas fa-user-plus"></i> Registro
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>
                  <i className="fas fa-sign-in-alt"></i> Login
                </a>
              </li>
              <li>
                <div className="cart-widget" onClick={() => console.log('Ir al carrito')}>
                  <i className="fas fa-shopping-cart"></i>
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;