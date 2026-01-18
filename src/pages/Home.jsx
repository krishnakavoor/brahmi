
import { useState } from 'react'

export default function Home() {
  const [color, setColor] = useState('#ffffff')
  const [text, setText] = useState('My Tee')
  const [language, setLanguage] = useState('en')
  const [font, setFont] = useState('Arial')
  console.log(text)

  return (
    <div className="create-tshirt-page">
      <h2>Create Infographic</h2>
      <p>Design your T‑shirt — pick a color, size, select language and font, and add custom text.</p>
      <div className="tshirt-preview">
        <div className="tshirt" style={{ backgroundColor: color }}>
          <p className="tshirt-text" style={{ fontFamily: font }} lang={language}>{text}</p>
        </div>
        <div className="tshirt-meta">Language: {language.toUpperCase()} • Font: {font}</div>
      </div>
      <form
        className="tshirt-form"
        onSubmit={(e) => {
          e.preventDefault()
          alert(`T‑Shirt created (demo): ${text} |  color: ${color} | lang: ${language} | font: ${font}`)
        }}
      >
        <label>
          Color
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <label>
          Text
          <textarea rows="3" value={text} onChange={(e) => setText(e.target.value)} />
        </label>

        <label>
          Language
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="hi">Hindi</option>
            <option value="kn">Kannada</option>
            <option value="tn">Tamil</option>
            <option value="gj">Gujrathi</option>
            <option value="te">Telugu</option>
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

      
    </div>
  )
}