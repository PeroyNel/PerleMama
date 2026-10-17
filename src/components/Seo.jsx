import { useEffect } from 'react'
import { SITE_NAME, SITE_URL } from '../config/site'
import { absoluteUrl } from '../data/pages'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ page }) {
  useEffect(() => {
    if (!page) return
    const url = absoluteUrl(page.path)
    const altUrl = absoluteUrl(page.hreflangPath)
    document.title = page.title
    document.documentElement.lang = page.lang === 'af' ? 'af-ZA' : 'en-ZA'

    upsertMeta('name', 'description', page.description)
    upsertLink('canonical', url)
    upsertLink('alternate', url, page.lang === 'af' ? 'af-ZA' : 'en-ZA')
    upsertLink('alternate', altUrl, page.lang === 'af' ? 'en-ZA' : 'af-ZA')
    upsertLink('alternate', absoluteUrl('/'), 'x-default')

    upsertMeta('property', 'og:title', page.title)
    upsertMeta('property', 'og:description', page.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', page.lang === 'af' ? 'af_ZA' : 'en_ZA')
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', page.title)
    upsertMeta('name', 'twitter:description', page.description)

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': `${SITE_URL}/#business`,
          name: SITE_NAME,
          url: SITE_URL,
          telephone: '+27761836080',
          areaServed: ['Stellenbosch', 'Western Cape', 'South Africa'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Stellenbosch',
            addressRegion: 'Western Cape',
            addressCountry: 'ZA',
          },
          founder: {
            '@type': 'Person',
            name: 'Annette Nel',
            jobTitle: 'Lactation Counselor (LC, CBI)',
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: page.title,
          description: page.description,
          inLanguage: page.lang === 'af' ? 'af-ZA' : 'en-ZA',
          isPartOf: { '@id': `${SITE_URL}/#website` },
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          inLanguage: ['en-ZA', 'af-ZA'],
        },
      ],
    }

    if (page.faqs?.length) {
      schema['@graph'].push({
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    }

    let script = document.getElementById('page-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-jsonld'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
  }, [page])

  return null
}
