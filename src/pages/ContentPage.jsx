import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import BookingForm from '../components/BookingForm'
import { testimonials } from '../data/testimonials'
import { getProblemPages, getServicePages } from '../data/pages'
import { WHATSAPP_URL } from '../config/site'

function ReviewStrip({ lang }) {
  const picks = testimonials.filter((t) => t.lang === lang || lang === 'en').slice(0, 2)
  return (
    <div className="content-reviews">
      {picks.map((t) => (
        <blockquote key={t.author} className="content-review-card">
          <p className="content-review-quote">“{t.quote}”</p>
          <footer>
            — {t.author}, {t.role}
          </footer>
        </blockquote>
      ))}
    </div>
  )
}

function BookCta({ lang }) {
  const af = lang === 'af'
  return (
    <section className="services content-book-section">
      <div className="container">
        <div className="content-book-card">
          <h2 className="section-title">
            {af ? 'Bespreek ’n huisbesoek of aanlyn konsultasie' : 'Book a home visit or online consult'}
          </h2>
          <p className="content-book-lead">
            {af
              ? 'Kies huisbesoek, aanlyn video, of Stellenbosch — of stuur WhatsApp nou.'
              : 'Choose a home visit, online video, or Stellenbosch — or WhatsApp now.'}
          </p>
          <div className="content-cta-row">
            <a href={WHATSAPP_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <Link to={af ? '/af/boek/' : '/book/'} className="cta-button">
              {af ? 'Kort vorm' : 'Short form'}
            </Link>
          </div>
          <div className="content-link-row">
            <Link to={af ? '/af/huisbesoeke/' : '/home-visits/'}>
              {af ? 'Huisbesoeke' : 'Home visits'}
            </Link>
            <Link to={af ? '/af/aanlyn-konsultasie/' : '/online-consultation/'}>
              {af ? 'Aanlyn' : 'Online'}
            </Link>
            <Link to={af ? '/af/stellenbosch-kliniek/' : '/stellenbosch-clinic/'}>
              Stellenbosch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqBlock({ faqs, lang }) {
  if (!faqs?.length) return null
  return (
    <section className="about content-faq-section">
      <div className="container">
        <div className="about-card content-faq-card">
          <h2 className="section-title">FAQ</h2>
          {faqs.map((f) => (
            <details key={f.q} className="content-faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContentPage({ page }) {
  const af = page.lang === 'af'
  const services = getServicePages(page.lang)
  const problems = getProblemPages(page.lang)

  return (
    <main className="content-page">
      <Seo page={page} />

      <section className="hero content-hero">
        <div className="container">
          <div className="hero-content">
            <p className="content-eyebrow">
              {page.credentials ||
                (af
                  ? 'Annette Nel, LC (CBI) · Stellenbosch'
                  : 'Annette Nel, LC (CBI) · Stellenbosch')}
            </p>
            <h1 className="hero-title content-page-title">{page.h1}</h1>
            <p className="hero-subtitle">{page.lead}</p>
            <ReviewStrip lang={page.lang} />
            <div className="content-cta-row">
              <a href={WHATSAPP_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <Link to={af ? '/af/boek/' : '/book/'} className="cta-button">
                {af ? 'Bespreek' : 'Book'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {page.type === 'book' && (
        <section className="about">
          <div className="container">
            <div className="about-card content-form-card">
              <h2 className="section-title">{af ? 'Besprekingsvorm' : 'Booking form'}</h2>
              <BookingForm lang={page.lang} />
            </div>
          </div>
        </section>
      )}

      {page.body?.length > 0 && (
        <section className="about">
          <div className="container">
            <div className="about-card content-body-card">
              {page.body.map((para) => (
                <p key={para.slice(0, 48)} className="about-text">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.type === 'resources' && (
        <section className="services">
          <div className="container">
            <h2 className="section-title">{af ? 'Onderwerpe' : 'Topics'}</h2>
            <div className="services-grid content-topics-grid">
              {problems.map((p) => (
                <Link key={p.path} to={p.path} className="service-card service-card-link content-topic-card">
                  <h3>{p.h1}</h3>
                  <p>{p.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.type === 'about' && (
        <section className="services">
          <div className="container">
            <h2 className="section-title">{af ? 'Dienste' : 'Services'}</h2>
            <div className="services-grid content-topics-grid">
              {services.map((s) => (
                <Link key={s.path} to={s.path} className="service-card service-card-link content-topic-card">
                  <h3>{s.h1}</h3>
                  <p>{s.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.type === 'service' && (
        <section className="services">
          <div className="container">
            <h2 className="section-title">{af ? 'Algemene uitdagings' : 'Common challenges'}</h2>
            <div className="services-grid content-topics-grid">
              {problems.slice(0, 3).map((p) => (
                <Link key={p.path} to={p.path} className="service-card service-card-link content-topic-card">
                  <h3>{p.h1}</h3>
                  <p>{p.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqBlock faqs={page.faqs} lang={page.lang} />

      {(page.type === 'problem' || page.type === 'service') && <BookCta lang={page.lang} />}
    </main>
  )
}
