import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { blogPosts, blogPath } from '../data/blog'
import { SITE_NAME } from '../config/site'

const indexPage = {
  path: '/blog/',
  lang: 'en',
  hreflangPath: '/blog/',
  title: `Breastfeeding blog | ${SITE_NAME}`,
  description:
    'Evidence-informed breastfeeding articles from Annette Nel, LC (CBI) — mastitis, pumping, and practical help for Stellenbosch and South Africa.',
  faqs: [],
}

export default function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main className="content-page">
      <Seo page={indexPage} />
      <section className="hero content-hero">
        <div className="container">
          <div className="hero-content">
            <p className="content-eyebrow">PerleMama Lactation · Articles</p>
            <h1 className="hero-title content-page-title">Blog</h1>
            <p className="hero-subtitle">
              Practical, evidence-informed notes for breastfeeding parents — written to teach, with
              clear next steps to book support when you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="services-grid content-topics-grid">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                to={blogPath(post.slug)}
                className="service-card service-card-link content-topic-card"
              >
                <p className="content-eyebrow" style={{ marginBottom: '0.5rem' }}>
                  {post.date} · {post.lang === 'af' ? 'Afrikaans' : 'English'}
                </p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
