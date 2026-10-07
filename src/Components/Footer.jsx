import { Camera, Globe2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Our Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const productLinks = [
  'Food & Agriculture',
  'Textiles & Fabrics',
  'Industrial Supplies',
  'Building Materials',
  'Consumer Goods',
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link className="brand footer-brand" to="/#home" aria-label="Abuzahar Trading home">
            <img className="brand-logo" src={logo} alt="Abuzahar Trading" />
          </Link>
          <p>
            Connecting suppliers, businesses, and markets with reliable
            sourcing and a commitment to lasting partnerships.
          </p>
          <div className="footer-socials" aria-label="Social media">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <Globe2 size={16} />
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <MessageCircle size={16} />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Camera size={16} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}><Link to={`/${link.href}`}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h2>Products</h2>
          <ul>
            {productLinks.map((product) => (
              <li key={product}><Link to="/#products">{product}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <Mail size={16} />
              <a href="mailto:info@abuzahartrading.com">info@abuzahartrading.com</a>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+923001234567">+92 300 123 4567</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>Oman</span>
            </li>
          </ul>
          <a className="footer-email-link" href="mailto:info@abuzahartrading.com">
            Send us an enquiry <Send size={14} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Abuzahar Trading. All Rights Reserved.</p>
          <span>Trade with confidence.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
