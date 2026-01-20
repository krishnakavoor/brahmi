
import { useState, useEffect } from 'react'
import fontsData from '../fonts.json'

export default function Home() {
  const [color, setColor] = useState('#ffffff')
  const [text, setText] = useState('My Tee')
  const [language, setLanguage] = useState('English')
  const [font, setFont] = useState('')
  const [availableFonts, setAvailableFonts] = useState([])
  const [languages, setLanguages] = useState([])

  // Load languages on component mount
  useEffect(() => {
    const langs = Object.keys(fontsData)
    setLanguages(langs)
    setLanguage(langs[0])
  }, [])

  // Load fonts when language changes
  useEffect(() => {
    if (fontsData[language]) {
      const fonts = fontsData[language]
      setAvailableFonts(fonts)
      // Set first font as default
      if (fonts.length > 0) {
        setFont(fonts[0].family)
      }
    }
  }, [language])

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
        <div className='row'>
            <div className='col-md-2'>
<label>
          Language
          <select name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </label>
        </div>
          <div className='col-md-2'> <label>
          Text Color
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label></div>
      <div className='col-md-6'>
 
        <label>
          Text
          <textarea rows="3" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </div>
<div className='col-md-2'> 

        <label>
          Font
          <select value={font} onChange={(e) => setFont(e.target.value)}>
            {availableFonts.map((fontObj) => (
              <option key={fontObj.id} value={fontObj.family}>{fontObj.name}</option>
            ))}
          </select>
        </label>
</div>
        </div>

        <button type="submit">Download Image</button>
      </form>

      
    </div>
  )
}