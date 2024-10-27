import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Checkout({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0).toFixed(2)

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${cartTotal}</strong>
          </div>
          <button className="checkout-btn">Proceed to Payment</button>
        </>
      )}
    </div>
  )
}

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Checkout
