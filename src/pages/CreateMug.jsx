import React, { useState } from 'react'
import './CreateMug.css'

export default function CreateMug() {
  const [color, setColor] = useState('#ffffff')
  const [text, setText] = useState('My Mug')
  const [language, setLanguage] = useState('en')
  const [font, setFont] = useState('Arial')

  return (
    <div className="create-mug-page">
      <h2>Create Mug</h2>
      <p>Customize your mug — choose a color, add text, select language and font, then preview it below.</p>

      <form
        className="mug-form"
        onSubmit={(e) => {
          e.preventDefault()
          alert(`Mug created (demo): ${text} | color: ${color} | lang: ${language} | font: ${font}`)
        }}
      >
        <label>
          Color
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
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

        <button type="submit">Create Mug</button>
      </form>

      <div className="mug-preview">
        <div className="mug" style={{ backgroundColor: color }}>
          <span className="mug-text" style={{ fontFamily: font }} lang={language}>{text}</span>
        </div>
        <div className="mug-meta">Language: {language.toUpperCase()} • Font: {font}</div>
      </div>
    </div>
  )
}
