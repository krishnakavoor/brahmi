
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CreateMug from './pages/CreateMug.jsx'
import CreateTShirt from './pages/CreateTShirt.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-mug" element={<CreateMug />} />
          <Route path="/create-tshirt" element={<CreateTShirt />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
