import { Link, useLocation } from 'react-router-dom'
import '../App.css'

function Header() {
  const { pathname } = useLocation()
  const af = pathname.startsWith('/af')
  const prefix = af ? '/af' : ''

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img
            src="/images/logo.jpg"
            alt="PerleMama Lactation Logo"
            className="logo-img"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <Link to={af ? '/af/' : '/'} className="logo-link">
            <h1 className="logo">PerleMama Lactation</h1>
          </Link>
        </div>
        <nav className="nav" aria-label="Main">
          <Link to={af ? '/af/' : '/'}>{af ? 'Tuis' : 'Home'}</Link>
          <Link to={`${prefix}${af ? '/huisbesoeke/' : '/home-visits/'}`}>
            {af ? 'Huisbesoeke' : 'Home visits'}
          </Link>
          <Link to={`${prefix}${af ? '/aanlyn-konsultasie/' : '/online-consultation/'}`}>
            {af ? 'Aanlyn' : 'Online'}
          </Link>
          <Link to={`${prefix}${af ? '/stellenbosch-kliniek/' : '/stellenbosch-clinic/'}`}>
            {af ? 'Stellenbosch' : 'Stellenbosch'}
          </Link>
          <Link to={`${prefix}${af ? '/hulpbronne/' : '/resources/'}`}>
            {af ? 'Hulp' : 'Help topics'}
          </Link>
          <Link to="/blog/">{af ? 'Blog' : 'Blog'}</Link>
          <Link to={`${prefix}${af ? '/boek/' : '/book/'}`} className="nav-cta">
            {af ? 'Bespreek' : 'Book'}
          </Link>
          <Link to={af ? '/' : '/af/'} className="nav-lang">
            {af ? 'EN' : 'AF'}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
