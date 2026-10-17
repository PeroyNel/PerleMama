import { Link } from 'react-router-dom'
import { FACEBOOK_URL, PHONE_DISPLAY, SITE_NAME, WHATSAPP_URL } from '../config/site'

export default function Footer({ lang = 'en' }) {
  const af = lang === 'af'
  const home = af ? '/af/' : '/'
  const book = af ? '/af/boek/' : '/book/'
  const about = af ? '/af/oor-my/' : '/about/'

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{SITE_NAME}</p>
          <p>Annette Nel, LC (CBI)</p>
          <p>Stellenbosch, Western Cape, South Africa</p>
          <p>
            <a href={`tel:+27761836080`}>{PHONE_DISPLAY}</a>
          </p>
          <p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            {' · '}
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
        </div>
        <div>
          <p>
            <Link to={home}>{af ? 'Tuis' : 'Home'}</Link>
          </p>
          <p>
            <Link to={about}>{af ? 'Oor my' : 'About'}</Link>
          </p>
          <p>
            <Link to={book}>{af ? 'Bespreek' : 'Book'}</Link>
          </p>
          <p>
            <Link to={af ? '/' : '/af/'}>{af ? 'English' : 'Afrikaans'}</Link>
          </p>
        </div>
        <div>
          <p className="footer-disclaimer">
            {af
              ? 'Borsvoeding-ondersteuning is nie noodgeval-sorg nie. By koors, erge pyn of ’n siek baba, kontak jou GP of nooddienste.'
              : 'Lactation support is not emergency care. For fever, severe pain, or an unwell baby, contact your GP or emergency services.'}
          </p>
          <p className="footer-copy">
            © {new Date().getFullYear()} {SITE_NAME}. perlemamalactation.co.za
          </p>
        </div>
      </div>
    </footer>
  )
}
