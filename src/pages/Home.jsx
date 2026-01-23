import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogArticles } from '../components/Header'
import '../App.css'

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentBlogArticle, setCurrentBlogArticle] = useState(0)

  const testimonials = [
    {
      text: "The support I received was incredible. I felt heard, understood, and empowered throughout my breastfeeding journey.",
      author: "Sarah M.",
      role: "New Mother"
    },
    {
      text: "Professional, compassionate, and knowledgeable. The guidance helped me overcome challenges I never thought I could.",
      author: "Emily R.",
      role: "First-time Parent"
    },
    {
      text: "Thank you for making such a difference in our family's life. The personalized approach made all the difference.",
      author: "Jessica L.",
      role: "Mother of Two"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogArticle((prev) => (prev + 1) % blogArticles.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [blogArticles.length])

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
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
              <p>60mins via videocall. We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/2.jpg" alt="Come to me" className="service-image-img" />
              </div>
              <h3>Come to me...</h3>
              <p>60 - 80mins at my Home & office in Stellenbosch. We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and guided oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/1.jpg" alt="Or I come to you" className="service-image-img" />
              </div>
              <h3>Or I come to you!</h3>
              <p>60 - 90mins at your home or hospital. We discuss your challenges and create a doable plan to achieve your goals. Includes a feeding observation and oral assessment, practical demonstrations, relevant written, graphic and video resources to further assist you, your session notes and care plan, and a text based follow up. Travel rates apply past 10km of Stellenbosch 
              at R3.25/km</p>
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
                <h3 className="about-subtitle">My Journey</h3>
                <p className="about-text">
                  With years of experience and a passion for supporting new families, 
                  I provide evidence-based breastfeeding support tailored to your unique needs. 
                  My approach combines professional expertise with genuine care and understanding.
                </p>
              </div>
            </div>

            <div className="about-section about-section-reverse">
              <div className="about-text-content">
                <h3 className="about-subtitle">My Approach</h3>
                <p className="about-text">
                  Every family's breastfeeding journey is unique. I take the time to understand 
                  your specific situation, challenges, and goals. Together, we'll create a 
                  personalized plan that works for you and your baby, ensuring both comfort and success.
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
                <p>"{testimonials[currentTestimonial].text}"</p>
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
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

