
import { useState, useEffect, useRef } from 'react'
import { toPng } from 'html-to-image'
import fontsData from '../fonts.json'

export default function Home() {
  const previewRef = useRef(null)
  const [color, setColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [text, setText] = useState('ಬೇವ ಋಷಿ')
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

  const downloadImage = async () => {
    if (previewRef.current) {
      try {
        const dataUrl = await toPng(previewRef.current)
        const link = document.createElement('a')
        link.href = dataUrl
        link.download = 'tshirt-preview.png'
        link.click()
      } catch (err) {
        console.error('Failed to capture image:', err)
        alert('Error downloading image. Please try again.')
      }
    }
  }
    return (
    <div className="create-tshirt-page">
      <h2>Create Infographic</h2>
      <p>Design your T‑shirt — pick a color, size, select language and font, and add custom text.</p>
      <div className="tshirt-preview" ref={previewRef}>
        <div className="tshirt" style={{ backgroundColor: backgroundColor }}>
          <p className="tshirt-text" style={{ fontFamily: font, color: color }} lang={language}>{text}</p>
        </div>
        <div className="tshirt-meta">Language: {language.toUpperCase()} • Font: {font}</div>
      </div>
      <form
        className="tshirt-form"
        onSubmit={(e) => {
          e.preventDefault()
          downloadImage();
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
          Background Color
          <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
        </label></div>
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