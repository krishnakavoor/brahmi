import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="app-header">
      <img src="/images/logo.png" alt="Brahmi Logo" className="header-logo" />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/create-mug">Create Mug</Link> | <Link to="/create-tshirt">Create T‑Shirt</Link> | <Link to="/privacy">Privacy</Link>
      </nav>
    </header>
  )
}
