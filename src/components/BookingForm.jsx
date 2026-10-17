import { useState } from 'react'
import { WHATSAPP_URL } from '../config/site'

export default function BookingForm({ lang = 'en' }) {
  const af = lang === 'af'
  const [age, setAge] = useState('')
  const [problem, setProblem] = useState('')
  const [mode, setMode] = useState('home')

  const modeLabels = af
    ? { home: 'Huisbesoek', online: 'Aanlyn', clinic: 'Stellenbosch' }
    : { home: 'Home visit', online: 'Online', clinic: 'Stellenbosch in person' }

  const submit = (e) => {
    e.preventDefault()
    const text = af
      ? `Haai Annette, ek wil graag ’n konsultasie bespreek. Baba se ouderdom: ${age || '___'}. Hoofkwessie: ${problem || '___'}. Voorkeur: ${modeLabels[mode]}.`
      : `Hi Annette, I would like to book a breastfeeding consult. Baby age: ${age || '___'}. Main concern: ${problem || '___'}. Preferred: ${modeLabels[mode]}.`
    const url = `https://wa.me/27761836080?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <label>
        {af ? 'Baba se ouderdom' : "Baby's age"}
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder={af ? 'bv. 3 weke' : 'e.g. 3 weeks'}
          required
        />
      </label>
      <label>
        {af ? 'Hoofkwessie' : 'Main concern'}
        <input
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder={af ? 'bv. seer tepels' : 'e.g. sore nipples'}
          required
        />
      </label>
      <fieldset>
        <legend>{af ? 'Voorkeur' : 'Preferred option'}</legend>
        {Object.entries(modeLabels).map(([key, label]) => (
          <label key={key} className="radio-row">
            <input
              type="radio"
              name="mode"
              value={key}
              checked={mode === key}
              onChange={() => setMode(key)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="cta-button">
        {af ? 'Stuur op WhatsApp' : 'Send on WhatsApp'}
      </button>
      <p className="form-note">
        {af ? 'Of boodskap direk: ' : 'Or message directly: '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </p>
    </form>
  )
}
