import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/#home" onClick={closeMenu} aria-label="Abuzahar Trading home">
          <img className="brand-logo" src={logo} alt="Abuzahar Trading" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div
          className={`nav-panel${menuOpen ? ' nav-panel-open' : ''}`}
          id="primary-navigation"
        >
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link to={`/${link.href}`} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="button button-dark navbar-cta" to="/#contact" onClick={closeMenu}>
            Get in Touch <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
