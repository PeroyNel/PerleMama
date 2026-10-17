import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppSticky from './components/WhatsAppSticky'
import ContentPage from './pages/ContentPage'
import HomePage from './pages/HomePage'
import BlogIndex from './pages/BlogIndex'
import BlogArticle from './pages/BlogArticle'
import { pages, getPageByPath } from './data/pages'
import { getPost } from './data/blog'
import './App.css'

function routePath(pagePath) {
  if (pagePath === '/') return '/'
  return pagePath.replace(/\/$/, '')
}

function PageById({ page }) {
  if (page.type === 'home') return <HomePage page={page} />
  return <ContentPage page={page} />
}

function Shell() {
  const { pathname } = useLocation()
  const page = getPageByPath(pathname)
  const blogSlug = pathname.match(/^\/blog\/([^/]+)/)?.[1]
  const blogPost = blogSlug ? getPost(blogSlug) : null
  const lang =
    page?.lang ||
    blogPost?.lang ||
    (pathname.startsWith('/af') ? 'af' : 'en')

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        {pages.map((p) => (
          <Route key={p.id} path={routePath(p.path)} element={<PageById page={p} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer lang={lang} />
      <WhatsAppSticky label="WhatsApp" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
