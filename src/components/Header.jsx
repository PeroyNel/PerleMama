import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../App.css'

function Header() {
  const { pathname } = useLocation()
  const af = pathname.startsWith('/af')
  const prefix = af ? '/af' : ''
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${menuOpen ? ' header-menu-open' : ''}`}>
      <div className="container header-bar">
        <div className="logo-container">
          <img
            src="/images/logo.jpg"
            alt=""
            className="logo-img"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <Link to={af ? '/af/' : '/'} className="logo-link" onClick={closeMenu}>
            <span className="logo">PerleMama Lactation</span>
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? (af ? 'Maak kieslys toe' : 'Close menu') : af ? 'Maak kieslys oop' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav id="main-nav" className={`nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main">
          <Link to={af ? '/af/' : '/'} onClick={closeMenu}>
            {af ? 'Tuis' : 'Home'}
          </Link>
          <Link to={`${prefix}${af ? '/huisbesoeke/' : '/home-visits/'}`} onClick={closeMenu}>
            {af ? 'Huisbesoeke' : 'Home visits'}
          </Link>
          <Link
            to={`${prefix}${af ? '/aanlyn-konsultasie/' : '/online-consultation/'}`}
            onClick={closeMenu}
          >
            {af ? 'Aanlyn' : 'Online'}
          </Link>
          <Link
            to={`${prefix}${af ? '/stellenbosch-kliniek/' : '/stellenbosch-clinic/'}`}
            onClick={closeMenu}
          >
            Stellenbosch
          </Link>
          <Link to={`${prefix}${af ? '/hulpbronne/' : '/resources/'}`} onClick={closeMenu}>
            {af ? 'Hulp' : 'Help topics'}
          </Link>
          <Link to="/blog/" onClick={closeMenu}>
            Blog
          </Link>
          <Link
            to={`${prefix}${af ? '/boek/' : '/book/'}`}
            className="nav-cta"
            onClick={closeMenu}
          >
            {af ? 'Bespreek' : 'Book'}
          </Link>
          <Link to={af ? '/' : '/af/'} className="nav-lang" onClick={closeMenu}>
            {af ? 'English' : 'Afrikaans'}
          </Link>
        </nav>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label={af ? 'Maak kieslys toe' : 'Close menu'}
          onClick={closeMenu}
        />
      )}
    </header>
  )
}

export default Header
