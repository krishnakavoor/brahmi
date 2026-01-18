import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="app-footer">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/create-mug">Create Mug</Link> | <Link to="/create-tshirt">Create T‑Shirt</Link>
      </nav>
    </footer>
  )
}
