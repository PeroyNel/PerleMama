import { Link } from 'react-router-dom'
import { blogArticles } from '../components/Header'
import '../App.css'

function Resources() {
  return (
    <main>
      <section className="blog-page">
        <div className="container">
          <h2 className="section-title">All Resources</h2>
          <div className="blog-grid">
            {blogArticles.map((article) => (
              <article key={article.id} className="blog-card">
                <div className="blog-card-image">
                  <div className="blog-image-placeholder">Article Image</div>
                </div>
                <div className="blog-card-content">
                  <span className="blog-date">{article.date}</span>
                  <h3 className="blog-card-title">{article.title}</h3>
                  <p className="blog-card-excerpt">{article.excerpt}</p>
                  <a href="#" className="blog-read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resources

