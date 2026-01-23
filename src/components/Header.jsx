import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../App.css'

export const blogArticles = [
  {
    id: 1,
    title: "Understanding Your Baby's Feeding Cues",
    excerpt: "Learn to recognize the early signs that your baby is ready to feed, helping you establish a successful breastfeeding routine.",
    image: "placeholder",
    date: "January 15, 2024"
  },
  {
    id: 2,
    title: "Common Breastfeeding Challenges and Solutions",
    excerpt: "Discover practical solutions to common breastfeeding challenges that many new mothers face during their journey.",
    image: "placeholder",
    date: "January 10, 2024"
  },
  {
    id: 3,
    title: "Nutrition Tips for Breastfeeding Mothers",
    excerpt: "Essential nutrition guidelines to help you maintain your health while providing the best nutrition for your baby.",
    image: "placeholder",
    date: "January 5, 2024"
  }
]

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHashNavigation = (hash) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src="/images/logo.jpg" alt="PerleMama Lactation Logo" className="logo-img" />
          <Link to="/" className="logo-link">
            <h1 className="logo">PerleMama Lactation</h1>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#services')
            }}
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#about')
            }}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#testimonials')
            }}
          >
            Testimonials
          </a>
          <Link to="/resources">Resources</Link>
          <a 
            href="#social" 
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#social')
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

