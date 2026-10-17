import { SITE_URL } from '../config/site.js'

/**
 * Blog articles — educational depth. Problem/service pages stay the conversion URLs.
 * One URL per article intent; do not duplicate a problem-page keyword as the only topic.
 */
export const blogPosts = [
  {
    slug: 'mastitis-protocol-update',
    lang: 'en',
    date: '2026-09-09',
    title: 'The updated mastitis protocol: what parents need to know',
    description:
      'Why heat-and-aggressive-massage advice is outdated, what helps inflammation, and when to see a doctor — from PerleMama Lactation in Stellenbosch.',
    h1: 'The updated mastitis protocol',
    lead:
      'A lot of mastitis advice online is still based on older recommendations. Current care focuses on reducing inflammation, continuing to feed, and getting medical help when you are systemically unwell.',
    tags: ['mastitis', 'breastfeeding'],
    relatedPath: '/mastitis/',
    body: [
      'Older guidance often pushed heat, aggressive massage, and “clearing the clog” at all costs. That can worsen inflammation for many parents.',
      'Updated approaches emphasise rest, cold for comfort when inflamed, continued milk removal without forcing, anti-inflammatory strategies as advised by your clinician, and feeding support so latch and drainage are effective.',
      'Fever, spreading redness, or feeling seriously ill is a medical issue first. Lactation support works alongside your GP or emergency care — not instead of it.',
      'If mastitis keeps coming back, a feeding assessment in Stellenbosch, at home, or online can help find drivers such as shallow latch or incomplete drainage.',
    ],
  },
  {
    slug: 'pumping-flange-fit',
    lang: 'en',
    date: '2026-09-16',
    title: 'Pump flange fit: why “just add 2 mm” is not enough',
    description:
      'Flange sizing myths, hypermobility, and how a better pump fit supports supply — PerleMama Lactation breastfeeding tips for South African parents.',
    h1: 'Pump flange fit beyond the 2 mm rule',
    lead:
      'The standard “just add 2 mm” guideline (or using whatever size came in the box) does not work for every body. Fit affects comfort, output, and whether pumping feels sustainable.',
    tags: ['pumping', 'back to work'],
    relatedPath: '/returning-to-work-pumping/',
    body: [
      'Hypermobility, breast shape, and how your tissue responds to a particular pump all influence whether a flange size works.',
      'Trying a size up and down from what you expect — and watching for rubbing, swelling, or poor output — is more useful than a single rule of thumb.',
      'A back-to-work or pumping consult can cover flange fit, schedule, and keeping supply going when you return to work.',
    ],
  },
  {
    slug: 'borsvoeding-hulp-stellenbosch-gids',
    lang: 'af',
    date: '2026-10-01',
    title: 'Borsvoeding hulp in Stellenbosch: waar om te begin',
    description:
      '’n Kort gids vir ouers in Stellenbosch en die Wynland wat tweetalige borsvoeding-ondersteuning soek — huisbesoeke, kliniek, of aanlyn.',
    h1: 'Borsvoeding hulp in Stellenbosch — waar om te begin',
    lead:
      'As jy in Stellenbosch of naby soek na borsvoeding hulp, begin by jou simptome, dan kies huisbesoek, Stellenbosch-sessie, of aanlyn — nie by ’n lys van los soekwoorde nie.',
    tags: ['stellenbosch', 'borsvoeding'],
    relatedPath: '/af/stellenbosch-kliniek/',
    body: [
      'Die vinnigste pad is gewoonlik WhatsApp met baba se ouderdom, jou hoofkwessie, en of jy huisbesoek, Stellenbosch, of video verkies.',
      'Vir pynlike aanhaking, seer tepels, lae melkvoorraad of mastitis het ons toegewyde hulpbladsye — dit is sterker vir soekenjins én vir jou as dun “sleutelwoord”-bladsye wat dieselfde ding herhaal.',
      'PerleMama Lactation bied tweetalige (Afrikaans en Engels) ondersteuning met Annette Nel, LC (CBI), as La Leche League SA-leier in Stellenbosch.',
    ],
  },
]

export function getPost(slug) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getPosts(lang) {
  if (!lang) return blogPosts
  return blogPosts.filter((p) => p.lang === lang)
}

export function blogPath(slug) {
  return `/blog/${slug}/`
}

export function blogAbsoluteUrl(slug) {
  return `${SITE_URL}/blog/${slug}/`
}
