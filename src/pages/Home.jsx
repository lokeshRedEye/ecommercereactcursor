import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaStar, FaShoppingCart } from 'react-icons/fa'

function Home({ products, addToCart }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Electronics', 'Accessories', 'Wearables']

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to TechShop</h2>
          <p>Discover the latest in tech gadgets and accessories</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      <nav className="category-nav">
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card-content">
                <h3>{product.name}</h3>
                <div className="rating">
                  <span className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < Math.floor(product.rating) ? "#ffc107" : "#e4e5e9"} />
                    ))}
                  </span>
                  <span className="review-count">({product.reviews})</span>
                </div>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </section>
    </>
  )
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default Home
