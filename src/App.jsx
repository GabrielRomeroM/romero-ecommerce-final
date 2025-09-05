import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentProduct, setCurrentProduct] = useState(null)
  const [cartCount, setCartCount] = useState(0)

  const navigateTo = (page, product = null) => {
    setCurrentPage(page)
    if (product) {
      setCurrentProduct(product)
    }
  }

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />
      case 'product':
        return <ProductDetail product={currentProduct} addToCart={addToCart} />
      case 'register':
        return <Register navigateTo={navigateTo} />
      case 'login':
        return <Login navigateTo={navigateTo} />
      default:
        return <Home navigateTo={navigateTo} />
    }
  }

  return (
    <div className="App">
      <Header cartCount={cartCount} navigateTo={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App