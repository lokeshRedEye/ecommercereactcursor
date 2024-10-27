import { FaRocket, FaCheckCircle, FaSmile, FaBalanceScale } from 'react-icons/fa'

function About() {
  return (
    <div className="about">
      <h2>About TechShop</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="TechShop Team" />
        </div>
        <div className="about-text">
          <p>TechShop is your one-stop destination for all things tech. We offer a wide range of high-quality electronics, accessories, and gadgets to enhance your digital lifestyle.</p>
          <p>Our mission is to provide our customers with the latest and greatest technology at competitive prices, coupled with exceptional customer service.</p>
        </div>
      </div>
      <h3>Our Values</h3>
      <ul className="values-list">
        <li><FaRocket /> <strong>Innovation:</strong> We stay ahead of the curve by offering cutting-edge products.</li>
        <li><FaCheckCircle /> <strong>Quality:</strong> We ensure that all our products meet the highest standards of quality.</li>
        <li><FaSmile /> <strong>Customer Satisfaction:</strong> Your happiness is our top priority.</li>
        <li><FaBalanceScale /> <strong>Integrity:</strong> We believe in honest and transparent business practices.</li>
      </ul>
    </div>
  )
}

export default About
