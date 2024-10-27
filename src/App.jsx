import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import { FaShoppingCart } from 'react-icons/fa'

function App() {
  const [cart, setCart] = useState([])
  const [products] = useState([
    { id: 1, name: 'Stylish Watch', price: 99.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80', category: 'Accessories', rating: 4.5, reviews: 120 },
    { id: 2, name: 'Wireless Headphones', price: 129.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.3, reviews: 85 },
    { id: 3, name: 'Smartphone', price: 499.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.7, reviews: 230 },
    { id: 4, name: 'Laptop', price: 899.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.6, reviews: 175 },
    { id: 5, name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&q=80', category: 'Wearables', rating: 4.4, reviews: 98 },
    { id: 6, name: 'Wireless Earbuds', price: 79.99, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.2, reviews: 65 },
    { id: 7, name: 'Digital Camera', price: 449.99, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.5, reviews: 112 },
    { id: 8, name: 'Gaming Console', price: 399.99, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.8, reviews: 201 },
    { id: 9, name: 'Fitness Tracker', price: 59.99, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=300&q=80', category: 'Wearables', rating: 4.1, reviews: 78 },
    { id: 10, name: 'Bluetooth Speaker', price: 89.99, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.4, reviews: 93 },
    { id: 11, name: 'Tablet', price: 299.99, image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.5, reviews: 150 },
    { id: 12, name: 'Smart Home Hub', price: 129.99, image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.3, reviews: 87 },
    { id: 13, name: 'Portable Charger', price: 39.99, image: 'https://images.unsplash.com/photo-1609592806312-d3290cd83c18?auto=format&fit=crop&w=300&q=80', category: 'Accessories', rating: 4.2, reviews: 65 },
    { id: 14, name: 'Wireless Mouse', price: 29.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80', category: 'Accessories', rating: 4.1, reviews: 55 },
    { id: 15, name: 'Smart Thermostat', price: 149.99, image: 'https://images.unsplash.com/photo-1567925058603-4f5c7e17d0b7?auto=format&fit=crop&w=300&q=80', category: 'Electronics', rating: 4.6, reviews: 110 },
  ])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  return (
    <Router>
      <div className="App">
        <header>
          <h1><Link to="/">Silo</Link></h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/checkout" className="cart-link">
              <FaShoppingCart /> <span className="cart-count">{cart.length}</span>
            </Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2023 TechShop. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
