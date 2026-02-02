import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { blogArticles } from '../components/Header'
import '../App.css'

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentBlogArticle, setCurrentBlogArticle] = useState(0)
  const testimonialIntervalRef = useRef(null)

  const testimonials = [
    {
      quote: "Annette gave me great advice regarding breastfeeding...",
      text: "storing expressed milk and buying the correct breast pump to suit my needs. She provided feedback on my questions quite quickly. She is friendly and very informative on the topic of breastfeeding.",
      author: "Elrike N.",
      role: "12 Mar 2024"
    },
    {
      quote: "I can not recommend Annette enough...",
      text: "Her bubbly nature makes the consult so comfortable and she is so professional and supportive. She has helped me through teething and pumping and even went out of her way to put me in touch with another mum to help trouble shoot my pump. A sincere Thank you to you Annette for the support and reassurance and empathy that you showed me. love and light to you always.",
      author: "Cerisha S.",
      role: "4 Oct 2024"
    },
    {
      quote: "Ek wens ek het Annette vroeër geken! ",
      text: "Ek is nie een dag spyt dat ek in kontak gekom het met haar nie. Ek is n FTM, sy het al my onsekerheid in my kop, goed wat vir my gesê was van ander wat n mamma se kop kan smokkel en voel jy doen dalk nie genoeg vir n borsvoed baba nie.\n\nEk sal haar enigtyd aanbeveel vir enige iemand wat raad soek. Sy het my al gehelp met alle vrae van borsvoed en reassurance gegee. My gehelp met baba se BLW oor hoe ek moet begin en tips wat sy gee. Ek sms haar nou nog oor goed wat ek onseker is oor.\n\nHaar diens en passie vir borsvoed! passie vir Mammas help wys en straal deur haar! sy laat mens bieers ongemaklik voel nie.mens gesels so lekker asof mens mekaar al vir jare ken.Dankie vir jou Raad en omgee.Sonder jou sou ek al lankal opgehou borsvoed het.",
      author: "Joanita W.",
      role: "14 Jan 2025"
    },
    {
      quote: "I honestly don’t know what I would have done without Annette on our breastfeeding journey.",
      text: "Since my baby was 2 months old, we were in constant distress – crying 24/7, nappies that changed colours within the same day, bloody diapers, slimy diapers, even foamy diapers – and absolutely no one could tell me what was wrong. We saw multiple doctors here in Namibia, but we left every appointment with more questions than answers.\n\nThen I found Annette, and from the very first call, I finally felt heard. We had three calls where she supported me with so much care, patience, and knowledge. She walked this overwhelming road with me and she recommended we cut all potential allergens (something no one else had even considered) and that completely changed everything.\n\nWithin a month, we saw the difference. His diapers improved, he looked like he wasn’t in constant pain anymore, and best of all, he finally cried less. The relief and gratitude I felt are impossible to describe. She figured out what no other doctor could, and I will forever be thankful for that.",
      author: "Denise Nell",
      role: "2 Jul 2025"
    },
    {
      quote: "She never stops reading, researching, and going the extra mile to help moms like me, her dedication is unmatched.",
      text: "She never stops reading, researching, and going the extra mile to help moms like me, her dedication is unmatched.",
      author: "Danielle N.",
      role: "10 Nov 2025"
    },
    {
      quote: "Die dag wat ek besluit het om op te gee met borsvoed was dieselfde dag wat ek besluit het om haar te kontak.",
      text: "Van die eerste interaksie af het alles net elke dag beter gegaan. Sy bied konstante ondersteuning met ongelooflike passie vir dit wat sy doen.. Sy is verseker my eerste oproep as ek raad nodig het!",
      author: "Elizma Pretorius",
      role: "2 Jul 2023"
    },
    {
      quote: "Ek sou dit nie gemaak het sonder jou nie!",
      text: "Boetie drink officially langer as wat sy sussie kon voed! Ons sukkel nog so af en toe maar ons kan dit darm manage! Ek het nooit gedink ek sal my tweede kan langer borsvoed as my eerste! Dis wel nog net n paar dae maar gaan nie opgee nie!\n\nJou hulp beteken so baie ek kan dit nie in woorde sit nie!",
      author: "Karlien Niemann",
      role: "27 Jan 2026"
    },
    {
      quote: "After dealing with a fever in my second week due to mastitis, Annette helped to demystify breastfeeding for me!",
      text: "Since then I have been able to avoid unnecessary complications. I’m grateful to have learned how natural and simple breastfeeding can be (including how and when to pump, as well as quality products to use, etc). I absolutely recommend! Natalie",
      author: "natalie Silva",
      role: "4 Jun 2024"
    },
    {
      quote: "Annette was extremely helpful with getting my baby to latch after being used to nipple shields.",
      text: "She was very patient and spent a lot of time with me. She also gave me the support I needed when I needed it most via Whatsapp.",
      author: "Lulu Fourie",
      role: "15 May 2024"
    },
    {
      quote: "I can’t thank Annette Nel enough for all the support she’s provided during my breastfeeding journey!",
      text: "From helping me get a proper latching with different positions to guiding me in the right direction with reflux issues, Annette has been an absolute lifesaver. She patiently worked with me on managing diaper troubles and even helped me adjust my diet to ensure it was best for my baby.\n\nHer expertise, kindness, and dedication made such a difference, and I always felt like I had a trusted LC in my corner. If you’re looking for a knowledgeable, compassionate, and thorough lactation consultant, I highly recommend Annette—she truly goes above and beyond!",
      author: "Chanel Rossouw",
      role: "15 Jan 2025"
    }
  ];



  useEffect(() => {
    const startInterval = () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current)
      }
      testimonialIntervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 10000)
    }

    startInterval()

    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current)
      }
    }
  }, [testimonials.length])

  const resetTestimonialTimer = () => {
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current)
    }
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogArticle((prev) => (prev + 1) % blogArticles.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [blogArticles.length])

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
    resetTestimonialTimer()
  }

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    resetTestimonialTimer()
  }

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    resetTestimonialTimer()
  }

  const goToBlogArticle = (index) => {
    setCurrentBlogArticle(index)
  }

  const goToPreviousBlog = () => {
    setCurrentBlogArticle((prev) => (prev - 1 + blogArticles.length) % blogArticles.length)
  }

  const goToNextBlog = () => {
    setCurrentBlogArticle((prev) => (prev + 1) % blogArticles.length)
  }

  return (
    <main>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">'Breastmilk is more valuable than pearls!'</h2>
            <p className="hero-subtitle">
              Breastfeeding doesn't have to be a struggle - get the support you need to feed your baby beautifully and beneficially.
            </p>
            <button className="cta-button">Book a Consultation</button>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/3.jpg" alt="Video session" className="service-image-img" />
              </div>
              <h3>Video session</h3>
              <p><strong>60 minutes via video call.</strong> <br></br><br></br>Don't want to leave your bed or couch? A video consultation is a convenient alternative to travelling! We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/2.jpg" alt="Come to me" className="service-image-img" />
              </div>
              <h3>Come to me...</h3>
              <p><strong>60 - 80 minutes at my home & office in Stellenbosch.</strong> <br></br><br></br>Come on in! We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and guided oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/1.jpg" alt="Or I come to you" className="service-image-img" />
              </div>
              <h3>Or I come to you!</h3>
              <p><strong>60 - 90 minutes at your home or hospital.</strong> <br></br><br></br>Let's discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up. Travel rates apply.</p>
            </div>
          </div>
          
          
        </div>
        
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Need more?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/3.jpg" alt="Video session" className="service-image-img" />
              </div>
              <h3>Text support</h3>
              <p><strong>60 minutes via video call.</strong> <br></br><br></br>Don't want to leave your bed or couch? A video consultation is a convenient alternative to travelling! We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/2.jpg" alt="Come to me" className="service-image-img" />
              </div>
              <h3>Pre-birth prep</h3>
              <p><strong>60 - 80 minutes at my home & office in Stellenbosch.</strong> <br></br><br></br>Come on in! We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and guided oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/1.jpg" alt="Or I come to you" className="service-image-img" />
              </div>
              <h3>Speciality session</h3>
              <p><strong>60 - 90 minutes at your home or hospital.</strong> <br></br><br></br>Let's discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up. Travel rates apply.</p>
            </div>
          </div>
          
          
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About</h2>

          <div className="about-card">
            <div className="about-section">
              <div className="about-image">
                <div className="placeholder-image">Image Placeholder</div>
              </div>
              <div className="about-text-content">
                <h3 className="about-subtitle">Hey, I'm Annette!</h3>
                <p className="about-text">
                ‘I am a mother of two and hopefully more to come! As much as I love breastfeeding, I'm a bit obsessed with pregnancy and the life-changing journey of physiological birth.”
                  <br></br><br></br>
                  I believe every woman can have a redemptive birth experience if the system failed her. We live in a time where women’s trust in their bodies and inherent mothering abilities are at an all time low. We can fix that!
                  <br></br><br></br>
                  I dream of every mother being able to breastfeed in comfort and with confidence, and eliminating the barriers to successful infant feeding through information and advocacy for the motherbaby dyad.
                  <br></br><br></br>
                  I am a homebirther and have experienced the joy of an unassisted birth, and support the right of women to make their own informed decisions regarding their pregnancy, birth and breastfeeding journey.’
                </p>
              </div>
            </div>

            <div className="about-section about-section-reverse">
              <div className="about-text-content">
                <h3 className="about-subtitle">I love lactation!</h3>
                <p className="about-text">
                ‘I obtained my Lactation Counselor (LC, CBI) certification by completing both education and counseling hours, as well as education in ethics, communication skills and occupational safety and security.
                  <br></br><br></br>
                  As well as being a committee member and Media Manager of LACSA (Lactation Consultants of Southern Africa) I also participate in various volunteer oriented groups, including helping facilitate the Breasties Breastfeeding Support Group on Facebook, a large volunteer run group providing mothers with evidence based lactation info and support.
                  <br></br><br></br>
                  I have a special interest in infant reflux, allergy management, fertility during breastfeeding, gentle and respectful weaning, and ecological breastfeeding.’
                </p>
              </div>
              <div className="about-image">
                <div className="placeholder-image">Image Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonials-carousel">
            <button className="carousel-button carousel-button-prev" onClick={goToPrevious} aria-label="Previous testimonial">
              ‹
            </button>
            <div className="testimonial-content">
              <div className="testimonial-text">
                <strong className="section-title-2">{testimonials[currentTestimonial].quote}</strong>

                <p><br />"{testimonials[currentTestimonial].text}"</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">{testimonials[currentTestimonial].author}</p>
                <p className="author-role">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            <button className="carousel-button carousel-button-next" onClick={goToNext} aria-label="Next testimonial">
              ›
            </button>
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="resources">
        <div className="container">
          <h2 className="section-title">Latest Resources</h2>
          <div className="blog-carousel">
            <button className="carousel-button carousel-button-prev" onClick={goToPreviousBlog} aria-label="Previous article">
              ‹
            </button>
            <div className="blog-article-card">
              <div className="blog-article-image">
                <div className="blog-image-placeholder">Article Image</div>
              </div>
              <div className="blog-article-content">
                <span className="blog-date">{blogArticles[currentBlogArticle].date}</span>
                <h3 className="blog-title">{blogArticles[currentBlogArticle].title}</h3>
                <p className="blog-excerpt">{blogArticles[currentBlogArticle].excerpt}</p>
                <Link to="/resources" className="blog-read-more">Read More →</Link>
              </div>
            </div>
            <button className="carousel-button carousel-button-next" onClick={goToNextBlog} aria-label="Next article">
              ›
            </button>
            <div className="carousel-indicators">
              {blogArticles.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentBlogArticle ? 'active' : ''}`}
                  onClick={() => goToBlogArticle(index)}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="social" className="social-media">
        <div className="container">
          <h2 className="section-title">Get in contact</h2>
          <div className="social-links">
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

