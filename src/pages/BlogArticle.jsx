import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { getPost, blogPath } from '../data/blog'
import { WHATSAPP_URL, SITE_NAME } from '../config/site'

export default function BlogArticle() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <Navigate to="/blog/" replace />

  const af = post.lang === 'af'
  const page = {
    path: blogPath(post.slug),
    lang: post.lang,
    hreflangPath: blogPath(post.slug),
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    faqs: [],
  }

  return (
    <main className="content-page">
      <Seo page={page} />
      <section className="hero content-hero">
        <div className="container">
          <div className="hero-content">
            <p className="content-eyebrow">
              {post.date} · <Link to="/blog/">Blog</Link>
            </p>
            <h1 className="hero-title content-page-title">{post.h1}</h1>
            <p className="hero-subtitle">{post.lead}</p>
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

      <section className="about">
        <div className="container">
          <div className="about-card content-body-card">
            {post.body.map((para) => (
              <p key={para.slice(0, 48)} className="about-text">
                {para}
              </p>
            ))}
            {post.relatedPath && (
              <p className="about-text">
                <Link to={post.relatedPath} className="blog-read-more">
                  {af ? 'Verwante hulpbladsy →' : 'Related help topic →'}
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="services content-book-section">
        <div className="container">
          <div className="content-book-card">
            <h2 className="section-title">
              {af ? 'Het jy persoonlike hulp nodig?' : 'Need personal support?'}
            </h2>
            <p className="content-book-lead">
              {af
                ? 'Bespreek ’n huisbesoek, Stellenbosch-sessie, of aanlyn konsultasie.'
                : 'Book a home visit, Stellenbosch session, or online consult.'}
            </p>
            <div className="content-cta-row">
              <a href={WHATSAPP_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <Link to="/blog/" className="cta-button">
                {af ? 'Meer artikels' : 'More articles'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
