import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-form-container">
          <p>We&apos;d love to hear from you! Please fill out the form below or use our contact information to get in touch.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li><FaEnvelope /> <strong>Email:</strong> info@techshop.com</li>
            <li><FaPhone /> <strong>Phone:</strong> (123) 456-7890</li>
            <li><FaMapMarkerAlt /> <strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94000</li>
          </ul>
          <div className="contact-map">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Silicon+Valley,CA&zoom=13&size=400x300&key=YOUR_API_KEY" alt="Map" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
