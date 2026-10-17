import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { testimonials } from '../data/testimonials'
import { blogPosts, blogPath } from '../data/blog'
import { FACEBOOK_URL, WHATSAPP_URL } from '../config/site'
import '../App.css'

export default function HomePage({ page }) {
  const af = page.lang === 'af'
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentTopic, setCurrentTopic] = useState(0)
  const testimonialIntervalRef = useRef(null)
  const topics = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  useEffect(() => {
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(testimonialIntervalRef.current)
  }, [])

  useEffect(() => {
    if (!topics.length) return undefined
    const id = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % topics.length)
    }, 6000)
    return () => clearInterval(id)
  }, [topics.length])

  const resetTestimonialTimer = () => {
    clearInterval(testimonialIntervalRef.current)
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
  }

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    resetTestimonialTimer()
  }

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    resetTestimonialTimer()
  }

  const t = testimonials[currentTestimonial]
  const topic = topics[currentTopic]

  const bookPath = af ? '/af/boek/' : '/book/'
  const onlinePath = af ? '/af/aanlyn-konsultasie/' : '/online-consultation/'
  const clinicPath = af ? '/af/stellenbosch-kliniek/' : '/stellenbosch-clinic/'
  const homeVisitPath = af ? '/af/huisbesoeke/' : '/home-visits/'
  const resourcesPath = '/blog/'
  const aboutPath = af ? '/af/oor-my/' : '/about/'

  return (
    <main>
      <Seo page={page} />

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
              {af
                ? "'Borsmelk is meer werd as pêrels!'"
                : "'Breastmilk is more valuable than pearls!'"}
            </h2>
            <p className="hero-subtitle">
              {af
                ? 'Borsvoeding hoef nie ’n stryd te wees nie — kry die ondersteuning wat jy nodig het om jou baba mooi en voordelig te voed.'
                : "Breastfeeding doesn't have to be a struggle - get the support you need to feed your baby beautifully and beneficially."}
            </p>
            <p className="hero-seo-line">{page.lead}</p>
            <Link to={bookPath} className="cta-button">
              {af ? 'Bespreek ’n konsultasie' : 'Book a Consultation'}
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">{af ? 'Dienste' : 'Services'}</h2>
          <div className="services-grid">
            <Link to={onlinePath} className="service-card service-card-link">
              <div className="service-image">
                <img src="/images/3.jpg" alt="" className="service-image-img" />
              </div>
              <h3>{af ? 'Video-sessie' : 'Video session'}</h3>
              <p>
                <strong>
                  {af ? '60 minute via videogesprek.' : '60 minutes via video call.'}
                </strong>
                <br />
                <br />
                {af
                  ? 'Wil jy nie jou bed of bank verlaat nie? ’n Videokonsultasie is ’n gerieflike alternatief vir reis! Ons bespreek jou uitdagings en skep ’n doenbare plan. Sluit in ’n voedingwaarneming, relevante hulpbronne, sessienotas en sorgplan, en teks-opvolg.'
                  : "Don't want to leave your bed or couch? A video consultation is a convenient alternative to travelling! We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up."}
              </p>
            </Link>
            <Link to={clinicPath} className="service-card service-card-link">
              <div className="service-image">
                <img src="/images/2.jpg" alt="" className="service-image-img" />
              </div>
              <h3>{af ? 'Kom na my…' : 'Come to me...'}</h3>
              <p>
                <strong>
                  {af
                    ? '60 – 80 minute by my huis & kantoor in Stellenbosch.'
                    : '60 - 80 minutes at my home & office in Stellenbosch.'}
                </strong>
                <br />
                <br />
                {af
                  ? 'Kom binne! Ons bespreek jou uitdagings en skep ’n doenbare plan. Sluit in ’n voedingwaarneming en geleide mondassessering, praktiese demonstrasies, hulpbronne, sessienotas en sorgplan, en teks-opvolg.'
                  : 'Come on in! We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and guided oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up.'}
              </p>
            </Link>
            <Link to={homeVisitPath} className="service-card service-card-link">
              <div className="service-image">
                <img src="/images/1.jpg" alt="" className="service-image-img" />
              </div>
              <h3>{af ? 'Of ek kom na jou!' : 'Or I come to you!'}</h3>
              <p>
                <strong>
                  {af
                    ? '60 – 90 minute by jou huis of hospitaal.'
                    : '60 - 90 minutes at your home or hospital.'}
                </strong>
                <br />
                <br />
                {af
                  ? 'Kom ons bespreek jou uitdagings en skep ’n doenbare plan. Sluit in ’n voedingwaarneming en mondassessering, praktiese demonstrasies, hulpbronne, sessienotas en sorgplan, en teks-opvolg. Reisfooie geld.'
                  : "Let's discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up. Travel rates apply."}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section id="need-more" className="services">
        <div className="container">
          <h2 className="section-title">{af ? 'Nog meer?' : 'Need more?'}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/3.jpg" alt="" className="service-image-img" />
              </div>
              <h3>{af ? 'Teks-ondersteuning' : 'Text support'}</h3>
              <p>
                <strong>
                  {af
                    ? 'Opvolg en vrae tussen sessies via WhatsApp.'
                    : 'Follow-up and questions between sessions via WhatsApp.'}
                </strong>
                <br />
                <br />
                {af
                  ? 'Na ’n konsultasie bly ek beskikbaar vir teks-gebaseerde steun sodat jy nie alleen voel met die volgende vraag nie. Tariewe en pakkette op aanvraag.'
                  : 'After a consult I stay available for text-based support so you are not alone with the next question. Rates and packages on enquiry.'}
              </p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/2.jpg" alt="" className="service-image-img" />
              </div>
              <h3>{af ? 'Voorgeborete voorbereiding' : 'Pre-birth prep'}</h3>
              <p>
                <strong>
                  {af
                    ? 'Borsvoeding-voorbereiding vóór baba kom.'
                    : 'Breastfeeding preparation before baby arrives.'}
                </strong>
                <br />
                <br />
                {af
                  ? 'Leer wat om te verwag in die eerste dae, hoe aanhaking werk, en hoe om jou ondersteuningstelsel gereed te kry — virtueel of in Stellenbosch.'
                  : 'Learn what to expect in the early days, how latch works, and how to set up your support system — online or in Stellenbosch.'}
              </p>
            </div>
            <Link
              to={af ? '/af/terug-werk-toe/' : '/returning-to-work-pumping/'}
              className="service-card service-card-link"
            >
              <div className="service-image">
                <img src="/images/1.jpg" alt="" className="service-image-img" />
              </div>
              <h3>{af ? 'Spesialiteit-sessie' : 'Speciality session'}</h3>
              <p>
                <strong>
                  {af
                    ? 'Terug werk toe, pomp, refluks, en meer.'
                    : 'Back to work, pumping, reflux, and more.'}
                </strong>
                <br />
                <br />
                {af
                  ? 'Gefokusde sessies vir spesifieke uitdagings — soos terug werk toe en pomp — met ’n duidelike plan en opvolg.'
                  : 'Focused sessions for specific challenges — like returning to work and pumping — with a clear plan and follow-up.'}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{af ? 'Oor my' : 'About'}</h2>

          <div className="about-card">
            <div className="about-section">
              <div className="about-image">
                <div className="placeholder-image">
                  {af ? 'Foto binnekort' : 'Image Placeholder'}
                </div>
              </div>
              <div className="about-text-content">
                <h3 className="about-subtitle">
                  {af ? 'Haai, ek is Annette!' : "Hey, I'm Annette!"}
                </h3>
                <p className="about-text">
                  {af
                    ? 'Ek is ’n ma van twee en hopelik nog meer! So lief soos ek is vir borsvoeding, is ek ook ’n bietjie obsessief oor swangerskap en die lewensveranderende reis van fisiologiese geboorte.'
                    : "I am a mother of two and hopefully more to come! As much as I love breastfeeding, I'm a bit obsessed with pregnancy and the life-changing journey of physiological birth."}
                  <br />
                  <br />
                  {af
                    ? 'Ek glo elke vrou kan ’n verlossende geboorte-ervaring hê as die stelsel haar gefaal het. Ons leef in ’n tyd waar vroue se vertroue in hul liggame en moederlike vermoëns op ’n laagtepunt is. Ons kan dit regmaak!'
                    : 'I believe every woman can have a redemptive birth experience if the system failed her. We live in a time where women’s trust in their bodies and inherent mothering abilities are at an all time low. We can fix that!'}
                  <br />
                  <br />
                  {af
                    ? 'Ek droom dat elke ma met gemak en selfvertroue kan borsvoed, en dat ons hindernisse tot suksesvolle babavoeding uit die weg ruim deur inligting en voorspraak vir die ma-baba-paar.'
                    : 'I dream of every mother being able to breastfeed in comfort and with confidence, and eliminating the barriers to successful infant feeding through information and advocacy for the motherbaby dyad.'}
                  <br />
                  <br />
                  {af
                    ? 'Ek is ’n tuisgeboorte-ma en steun vroue se reg om ingeligte besluite te neem oor swangerskap, geboorte en borsvoeding.'
                    : 'I am a homebirther and have experienced the joy of an unassisted birth, and support the right of women to make their own informed decisions regarding their pregnancy, birth and breastfeeding journey.'}
                </p>
                <Link to={aboutPath} className="blog-read-more">
                  {af ? 'Lees meer →' : 'Read more →'}
                </Link>
              </div>
            </div>

            <div className="about-section about-section-reverse">
              <div className="about-text-content">
                <h3 className="about-subtitle">
                  {af ? 'Ek is mal oor laktasie!' : 'I love lactation!'}
                </h3>
                <p className="about-text">
                  {af
                    ? 'Ek het my Lactation Counselor (LC, CBI) sertifisering behaal deur opleiding én beradingsure, asook etiek, kommunikasievaardighede en beroepsveiligheid.'
                    : 'I obtained my Lactation Counselor (LC, CBI) certification by completing both education and counseling hours, as well as education in ethics, communication skills and occupational safety and security.'}
                  <br />
                  <br />
                  {af
                    ? 'Ek is die La Leche League SA-leier vir Stellenbosch en help fasiliteer bewysgebaseerde portuursteun soos die Breasties-groep op Facebook.'
                    : 'I am the La Leche League SA Leader for Stellenbosch and help facilitate evidence-based peer support spaces such as the Breasties Breastfeeding Support Group on Facebook.'}
                  <br />
                  <br />
                  {af
                    ? 'Spesiale belangstellings: baba-refluks, allergie-bestuur, vrugbaarheid tydens borsvoeding, sagte speen, en ekologiese borsvoeding.'
                    : 'I have a special interest in infant reflux, allergy management, fertility during breastfeeding, gentle and respectful weaning, and ecological breastfeeding.'}
                </p>
              </div>
              <div className="about-image">
                <div className="placeholder-image">
                  {af ? 'Foto binnekort' : 'Image Placeholder'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">
            {af ? 'Wat kliënte sê' : 'What Clients Say'}
          </h2>
          <div className="testimonials-carousel">
            <button
              className="carousel-button carousel-button-prev"
              onClick={goToPrevious}
              aria-label={af ? 'Vorige' : 'Previous testimonial'}
              type="button"
            >
              ‹
            </button>
            <div className="testimonial-content">
              <div className="testimonial-text">
                <strong className="section-title-2">{t.quote}</strong>
                <p>
                  <br />"{t.text}"
                </p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">{t.author}</p>
                <p className="author-role">{t.role}</p>
              </div>
            </div>
            <button
              className="carousel-button carousel-button-next"
              onClick={goToNext}
              aria-label={af ? 'Volgende' : 'Next testimonial'}
              type="button"
            >
              ›
            </button>
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentTestimonial(index)
                    resetTestimonialTimer()
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="resources">
        <div className="container">
          <h2 className="section-title">
            {af ? 'Nuutste artikels' : 'Latest articles'}
          </h2>
          {topic && (
            <div className="blog-carousel">
              <button
                className="carousel-button carousel-button-prev"
                type="button"
                onClick={() =>
                  setCurrentTopic((prev) => (prev - 1 + topics.length) % topics.length)
                }
                aria-label={af ? 'Vorige' : 'Previous'}
              >
                ‹
              </button>
              <div className="blog-article-card">
                <div className="blog-article-image">
                  <div className="blog-image-placeholder">
                    {af ? 'Artikel' : 'Article'}
                  </div>
                </div>
                <div className="blog-article-content">
                  <span className="blog-date">{topic.date}</span>
                  <h3 className="blog-title">{topic.title}</h3>
                  <p className="blog-excerpt">{topic.description}</p>
                  <Link to={blogPath(topic.slug)} className="blog-read-more">
                    {af ? 'Lees meer →' : 'Read More →'}
                  </Link>
                </div>
              </div>
              <button
                className="carousel-button carousel-button-next"
                type="button"
                onClick={() => setCurrentTopic((prev) => (prev + 1) % topics.length)}
                aria-label={af ? 'Volgende' : 'Next'}
              >
                ›
              </button>
              <div className="carousel-indicators">
                {topics.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`indicator ${index === currentTopic ? 'active' : ''}`}
                    onClick={() => setCurrentTopic(index)}
                    aria-label={`Go to article ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
          <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link to={resourcesPath} className="blog-read-more">
              {af ? 'Alle artikels →' : 'All articles →'}
            </Link>
            {' · '}
            <Link to={af ? '/af/hulpbronne/' : '/resources/'} className="blog-read-more">
              {af ? 'Hulp-onderwerpe →' : 'Help topics →'}
            </Link>
          </p>
        </div>
      </section>

      <section id="social" className="social-media">
        <div className="container">
          <h2 className="section-title">
            {af ? 'Kom in kontak' : 'Get in contact'}
          </h2>
          <div className="social-links">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  fill="currentColor"
                />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="currentColor"
                />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
