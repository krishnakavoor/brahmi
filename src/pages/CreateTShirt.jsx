import React, { useState } from 'react'
import './CreateTShirt.css'

export default function CreateTShirt() {
  const [color, setColor] = useState('#ffffff')
  const [size, setSize] = useState('M')
  const [text, setText] = useState('My Tee')
  const [language, setLanguage] = useState('en')
  const [font, setFont] = useState('Arial')

  return (
    <div className="create-tshirt-page">
      <h2>Create T‑Shirt</h2>
      <p>Design your T‑shirt — pick a color, size, select language and font, and add custom text.</p>

      <form
        className="tshirt-form"
        onSubmit={(e) => {
          e.preventDefault()
          alert(`T‑Shirt created (demo): ${text} | size: ${size} | color: ${color} | lang: ${language} | font: ${font}`)
        }}
      >
        <label>
          Color
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>

        <label>
          Size
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </label>

        <label>
          Text
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>

        <label>
          Language
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
        </label>

        <label>
          Font
          <select value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="'Courier New', Courier, monospace">Courier New</option>
            <option value="'Times New Roman', Times, serif">Times New Roman</option>
            <option value="Impact, 'Arial Black', sans-serif">Impact</option>
          </select>
        </label>

        <button type="submit">Create T‑Shirt</button>
      </form>

      <div className="tshirt-preview">
        <div className="tshirt" style={{ backgroundColor: color }}>
          <span className="tshirt-text" style={{ fontFamily: font }} lang={language}>{text}</span>
        </div>
        <div className="tshirt-size">Size: {size}</div>
        <div className="tshirt-meta">Language: {language.toUpperCase()} • Font: {font}</div>
      </div>
    </div>
  )
}
