import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProductDetails({ products, addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

ProductDetails.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default ProductDetails
