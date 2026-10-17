import { SERVICE_AREAS, TRAVEL_NOTE, SITE_URL } from '../config/site.js'

/**
 * Single source of truth for SEO pages.
 * path is absolute from site root (no trailing slash except home).
 * lang: 'en' | 'af'
 * hreflangPath: path of the language alternate
 */
export const pages = [
  // ——— English home ———
  {
    id: 'home-en',
    path: '/',
    lang: 'en',
    hreflangPath: '/af/',
    title: 'PerleMama Lactation | Breastfeeding help Stellenbosch & Western Cape',
    description:
      'Annette Nel, LC (CBI) — bilingual breastfeeding support in Stellenbosch: home visits across the Western Cape, online consults South Africa-wide, and in-person sessions. Book on WhatsApp.',
    h1: 'Breastfeeding help in Stellenbosch & the Western Cape',
    lead:
      'PerleMama Lactation offers bilingual (English & Afrikaans) breastfeeding support with Annette Nel, Lactation Counselor (LC, CBI). Home visits, online video consults, and Stellenbosch in-person sessions — book on WhatsApp.',
    type: 'home',
    credentials:
      'Annette Nel, LC (CBI) · La Leche League SA Leader, Stellenbosch · Evidence-based lactation support from start to wean',
    faqs: [
      {
        q: 'Where do you offer breastfeeding help?',
        a: `Home visits across Stellenbosch, Somerset West, Strand, Paarl, Franschhoek and selected Cape Town southern suburbs; in-person at my Stellenbosch home office; and online video consults anywhere in South Africa.`,
      },
      {
        q: 'Do you speak Afrikaans?',
        a: 'Yes. Consults and resources are available in English and Afrikaans. Many parents search and chat in both.',
      },
      {
        q: 'How do I book?',
        a: 'WhatsApp is the fastest way. Share baby’s age, your main concern, and whether you prefer a home visit, online session, or Stellenbosch visit.',
      },
    ],
  },

  // ——— EN services ———
  {
    id: 'home-visits-en',
    path: '/home-visits/',
    lang: 'en',
    hreflangPath: '/af/huisbesoeke/',
    title: 'Breastfeeding help at home | Stellenbosch & Western Cape | PerleMama Lactation',
    description:
      'Home and hospital breastfeeding visits with Annette Nel, LC (CBI). Stellenbosch base; travel to Somerset West, Paarl, Franschhoek, Strand and surrounds.',
    h1: 'Breastfeeding help at home — Stellenbosch & Western Cape',
    lead:
      'A 60–90 minute home or hospital visit: feeding observation, oral assessment where needed, practical demos, a written care plan, and WhatsApp follow-up.',
    type: 'service',
    serviceKey: 'home',
    body: [
      'When leaving the house with a newborn feels impossible, I come to you. We work through latch, comfort, milk transfer, and your goals in your own space.',
      `Areas I regularly cover: ${SERVICE_AREAS.join(', ')}.`,
      TRAVEL_NOTE,
      'Prefer not to travel? You can also book an online consult or come to my Stellenbosch home office.',
    ],
    faqs: [
      {
        q: 'How long is a home visit?',
        a: 'Usually 60–90 minutes, plus a text-based follow-up after your session.',
      },
      {
        q: 'Do you visit hospitals?',
        a: 'Yes — home or hospital visits are available within the travel area. Ask on WhatsApp for current availability.',
      },
    ],
  },
  {
    id: 'online-en',
    path: '/online-consultation/',
    lang: 'en',
    hreflangPath: '/af/aanlyn-konsultasie/',
    title: 'Online breastfeeding consultation South Africa | PerleMama Lactation',
    description:
      'Virtual breastfeeding consultation with Annette Nel, LC (CBI). 60-minute video sessions anywhere in South Africa, with a care plan and WhatsApp follow-up.',
    h1: 'Online breastfeeding consultation — South Africa',
    lead:
      'A 60-minute video consult for latch, supply, pumping, mastitis concerns, returning to work, and more — without leaving home. Available nationwide.',
    type: 'service',
    serviceKey: 'online',
    body: [
      'Online sessions include a feeding observation where possible, clear next steps, written and video resources, session notes, and text follow-up.',
      'Parents across South Africa (and beyond) use video when a home visit is not practical. Rates on enquiry via WhatsApp.',
      'Based in Stellenbosch, Western Cape — also offering home visits and in-person sessions locally.',
    ],
    faqs: [
      {
        q: 'Is online breastfeeding help effective?',
        a: 'Many latch, pumping, supply, and planning questions work very well on video. If a hands-on oral assessment is essential, we can plan a home or Stellenbosch visit instead.',
      },
      {
        q: 'What do I need for a video session?',
        a: 'A quiet space, charged phone or laptop, and baby nearby if we are observing a feed. WhatsApp or a video link — confirmed when you book.',
      },
    ],
  },
  {
    id: 'clinic-en',
    path: '/stellenbosch-clinic/',
    lang: 'en',
    hreflangPath: '/af/stellenbosch-kliniek/',
    title: 'Breastfeeding consultant Stellenbosch | In-person | PerleMama Lactation',
    description:
      'In-person breastfeeding consults with Annette Nel, LC (CBI) at her Stellenbosch home office. Parking, hours, and booking via WhatsApp.',
    h1: 'Breastfeeding consultant in Stellenbosch — come to me',
    lead:
      '60–80 minutes at my Stellenbosch home & office: feeding observation, guided oral assessment, practical demos, care plan, and WhatsApp follow-up.',
    type: 'service',
    serviceKey: 'clinic',
    body: [
      'Address: Stellenbosch, Western Cape (exact street details shared when you book).',
      'Parking: available nearby — ask when you confirm your appointment.',
      'Hours: by appointment. Message on WhatsApp for the next available slot.',
      'Also available for home visits in the Winelands / Helderberg corridor and online across South Africa.',
    ],
    faqs: [
      {
        q: 'Where is the Stellenbosch practice?',
        a: 'Consults are at my home office in Stellenbosch. Full address and parking notes are sent when you book.',
      },
      {
        q: 'Can I claim from medical aid?',
        a: 'Some medical aids reimburse lactation support — check with your scheme. I can provide an invoice; I am a Lactation Counselor (LC, CBI), not an IBCLC.',
      },
    ],
  },
  {
    id: 'about-en',
    path: '/about/',
    lang: 'en',
    hreflangPath: '/af/oor-my/',
    title: 'About Annette Nel, LC (CBI) | PerleMama Lactation Stellenbosch',
    description:
      'Meet Annette Nel, Lactation Counselor (LC, CBI) and La Leche League SA Leader in Stellenbosch. Bilingual breastfeeding support from start to wean.',
    h1: 'Hey, I am Annette',
    lead:
      'Mother of two, Lactation Counselor (LC, CBI), and La Leche League SA Leader for Stellenbosch. I support mothers to breastfeed in comfort and confidence.',
    type: 'about',
    body: [
      'I obtained my Lactation Counselor (LC, CBI) certification through Childbirth International, including education and counselling hours, ethics, and communication skills.',
      'I volunteer with La Leche League South Africa as the Stellenbosch Leader and help facilitate evidence-based peer support spaces such as the Breasties breastfeeding community on Facebook.',
      'Special interests: infant reflux, allergy management, fertility during breastfeeding, gentle weaning, ecological breastfeeding, back-to-work pumping, and updated mastitis care.',
      'I am not an IBCLC. When a case needs medical or IBCLC-level care, I refer appropriately.',
    ],
    faqs: [
      {
        q: 'What does LC (CBI) mean?',
        a: 'Lactation Counselor certified via Childbirth International — education and counselling hours focused on supporting the breastfeeding relationship.',
      },
    ],
  },
  {
    id: 'book-en',
    path: '/book/',
    lang: 'en',
    hreflangPath: '/af/boek/',
    title: 'Book a breastfeeding consult | PerleMama Lactation',
    description:
      'Book a home visit, online consult, or Stellenbosch in-person session with Annette Nel. WhatsApp or short form — baby age, main concern, preferred option.',
    h1: 'Book a consult',
    lead:
      'Share a few details and I will reply on WhatsApp with availability and rates. Urgent pain or fever: contact your GP or emergency services first.',
    type: 'book',
  },
  {
    id: 'resources-en',
    path: '/resources/',
    lang: 'en',
    hreflangPath: '/af/hulpbronne/',
    title: 'Breastfeeding help topics | PerleMama Lactation',
    description:
      'Guides on painful latch, low milk supply, mastitis, tongue-tie, pumping at work, and newborn weight gain — with booking CTAs for Stellenbosch and online support.',
    h1: 'Breastfeeding help topics',
    lead:
      'Practical pages on common challenges. Each ends with how to book a home visit, online consult, or Stellenbosch session.',
    type: 'resources',
  },

  // ——— EN problem pages ———
  {
    id: 'painful-latch-en',
    path: '/painful-latch/',
    lang: 'en',
    hreflangPath: '/af/seer-tepels/',
    title: 'Painful latch & sore nipples | Breastfeeding help | PerleMama Lactation',
    description:
      'Painful latch and sore nipples are common — and fixable with skilled support. Book a Stellenbosch home visit or online consult with Annette Nel, LC (CBI).',
    h1: 'Painful latch and sore nipples',
    lead:
      'Breastfeeding should not leave you dreading every feed. Shallow latch, positioning, tongue function, and engorgement often drive nipple pain — a consult can pinpoint what is going on.',
    type: 'problem',
    body: [
      'Sore, cracked, or misshapen nipples after feeds often mean baby is not taking a deep enough mouthful of breast. Pain that lasts throughout the feed is a signal to get help.',
      'In a session we assess latch and positioning, look at oral function when needed, and build a plan you can use at the next feed — not only advice for “someday”.',
      'This page is educational support, not emergency care. Fever, red streaks, or feeling very unwell need a doctor urgently.',
    ],
    faqs: [
      {
        q: 'Is nipple pain normal?',
        a: 'Mild adjustment in the first days can happen; ongoing or severe pain is not something you have to endure. Get assessed.',
      },
      {
        q: 'Can this be done online?',
        a: 'Video often works for positioning coaching. Hands-on assessment is easier in person or at home.',
      },
    ],
  },
  {
    id: 'low-supply-en',
    path: '/low-milk-supply/',
    lang: 'en',
    hreflangPath: '/af/lae-melkvoorraad/',
    title: 'Low milk supply help | Stellenbosch & online | PerleMama Lactation',
    description:
      'Worried about low milk supply? Perceived low supply is common. Get a clear assessment and plan with Annette Nel, LC (CBI) — home, clinic, or online.',
    h1: 'Low milk supply — and perceived low supply',
    lead:
      'Many mothers worry they do not have enough milk when baby is cluster feeding or unsettled. We separate true supply issues from normal infant behaviour and build a plan.',
    type: 'problem',
    body: [
      'True low supply and perceived low supply need different approaches. Effective, frequent milk removal is the foundation — supplements alone rarely fix the root cause.',
      'We look at feed frequency, latch quality, output signs (nappies, weight), pumping if used, and your goals around exclusive breastfeeding or combination feeding.',
      'Educational support only. Poor weight gain or a jaundiced, sleepy baby needs prompt clinical assessment.',
    ],
    faqs: [
      {
        q: 'Do galactagogues increase milk?',
        a: 'Many products have weak evidence. Feeling like supply improved can be a placebo effect. Focus first on milk removal and latch.',
      },
    ],
  },
  {
    id: 'mastitis-en',
    path: '/mastitis/',
    lang: 'en',
    hreflangPath: '/af/mastitis/',
    title: 'Mastitis & blocked ducts | Updated care | PerleMama Lactation',
    description:
      'Mastitis and blocked ducts: what has changed in care (cold, rest, continued feeding). Support from Annette Nel in Stellenbosch or online. Seek a doctor if you are systemically unwell.',
    h1: 'Mastitis and blocked ducts',
    lead:
      'Older advice to “heat and aggressively massage” is outdated. Current approaches focus on reducing inflammation, continuing to feed, and getting the right clinical support.',
    type: 'problem',
    body: [
      'If you have fever, spreading redness, or feel seriously ill, contact a doctor or emergency care first. Lactation support works alongside medical care, not instead of it.',
      'In a consult we look at latch and drainage, feeding patterns, and practical comfort measures aligned with current mastitis protocols.',
      'Recurrent mastitis often has a feeding or inflammation driver we can address together.',
    ],
    faqs: [
      {
        q: 'Should I stop breastfeeding with mastitis?',
        a: 'Usually you should continue feeding or expressing from the affected side unless a clinician advises otherwise. Stopping abruptly can worsen engorgement.',
      },
    ],
  },
  {
    id: 'tongue-tie-en',
    path: '/tongue-tie/',
    lang: 'en',
    hreflangPath: '/af/tongbandjie/',
    title: 'Tongue-tie and breastfeeding | Assessment support | PerleMama Lactation',
    description:
      'Tongue-tie can affect latch and milk transfer — not every tie needs a procedure. Feeding assessment with Annette Nel, LC (CBI), Stellenbosch & online.',
    h1: 'Tongue-tie and feeding',
    lead:
      'Clicking feeds, nipple damage, and poor transfer can have many causes. Oral restrictions are one possibility — skilled feeding assessment comes before rushing to a release.',
    type: 'problem',
    body: [
      'Not every tongue-tie causes breastfeeding problems, and not every feeding problem is a tongue-tie. We assess function at the breast first.',
      'If a procedure is appropriate, I can help you prepare, protect supply, and rehabilitate feeding afterwards — and refer to suitable practitioners.',
      'This is not a diagnosis or surgical service. Medical decisions stay with you and your clinical team.',
    ],
    faqs: [
      {
        q: 'Do you perform tongue-tie releases?',
        a: 'No. I provide lactation assessment and feeding support, and refer when a clinical procedure may be indicated.',
      },
    ],
  },
  {
    id: 'back-to-work-en',
    path: '/returning-to-work-pumping/',
    lang: 'en',
    hreflangPath: '/af/terug-werk-toe/',
    title: 'Returning to work & pumping | Breastfeeding plan | PerleMama Lactation',
    description:
      'Back-to-work breastfeeding sessions: pump choice, flange fit, schedule, and keeping supply. Online with Annette Nel, LC (CBI), or in Stellenbosch.',
    h1: 'Returning to work and pumping',
    lead:
      'Going back to work does not have to end breastfeeding. We choose a pump approach, flange fit, and a realistic schedule that fits your day.',
    type: 'problem',
    body: [
      'Sessions cover pump selection, flange sizing (the “just add 2 mm” rule is not right for everyone), storage, paced bottle use, and protecting supply on work days.',
      'Available as a focused online session — popular for parents across South Africa — or in person in Stellenbosch.',
    ],
    faqs: [
      {
        q: 'When should I start planning?',
        a: 'Ideally a few weeks before you return, so you can practise pumping and build a small freezer buffer if that is your goal.',
      },
    ],
  },
  {
    id: 'weight-gain-en',
    path: '/newborn-weight-gain/',
    lang: 'en',
    hreflangPath: '/af/baba-gewig/',
    title: 'Newborn not gaining weight | Breastfeeding support | PerleMama Lactation',
    description:
      'Concerned about newborn weight gain while breastfeeding? Get a feeding assessment and plan with Annette Nel in Stellenbosch or online. Seek urgent care if baby is unwell.',
    h1: 'Newborn not gaining weight',
    lead:
      'Weight concerns are stressful. We assess milk transfer, latch, feed frequency, and output — and work with your paediatric advice.',
    type: 'problem',
    body: [
      'Slow gain has many causes: ineffective latch, sleepy feeds, schedule issues, or medical factors. A feeding observation clarifies next steps.',
      'If your baby is lethargic, not wetting nappies, or your clinician is worried, follow medical advice immediately. Lactation support complements paediatric care.',
    ],
    faqs: [
      {
        q: 'Should I supplement?',
        a: 'Sometimes supplementation protects baby while we fix transfer. That decision should involve weight data and, where needed, your doctor or clinic.',
      },
    ],
  },

  // ——— Afrikaans home + services ———
  {
    id: 'home-af',
    path: '/af/',
    lang: 'af',
    hreflangPath: '/',
    title: 'PerleMama Lactation | Borsvoeding hulp Stellenbosch & Wes-Kaap',
    description:
      'Annette Nel, LC (CBI) — tweetalige borsvoeding ondersteuning in Stellenbosch: huisbesoeke in die Wes-Kaap, aanlyn konsultasies, en persoonlike sessies. Bespreek op WhatsApp.',
    h1: 'Borsvoeding hulp in Stellenbosch en die Wes-Kaap',
    lead:
      'PerleMama Lactation bied tweetalige (Afrikaans & Engels) borsvoeding ondersteuning met Annette Nel, Lactation Counselor (LC, CBI). Huisbesoeke, aanlyn video-sessies, en Stellenbosch konsultasies — bespreek op WhatsApp.',
    type: 'home',
    credentials:
      'Annette Nel, LC (CBI) · La Leche League SA-leier, Stellenbosch · Bewysgebaseerde ondersteuning van begin tot speen',
    faqs: [
      {
        q: 'Waar help jy met borsvoeding?',
        a: 'Huisbesoeke in Stellenbosch, Somerset-Wes, Strand, Paarl, Franschhoek en geselekteerde suidelike voorstede; by my Stellenbosch kantoor; en aanlyn oral in Suid-Afrika.',
      },
      {
        q: 'Doen jy ook Engels?',
        a: 'Ja. Baie ouers soek en gesels in albei tale — jy kies wat gemaklik is.',
      },
      {
        q: 'Hoe bespreek ek?',
        a: 'WhatsApp is die vinnigste. Stuur baba se ouderdom, jou hoofkwessie, en of jy huisbesoek, aanlyn of Stellenbosch verkies.',
      },
    ],
  },
  {
    id: 'huisbesoeke-af',
    path: '/af/huisbesoeke/',
    lang: 'af',
    hreflangPath: '/home-visits/',
    title: 'Huisbesoeke vir borsvoeding | Stellenbosch & Wes-Kaap | PerleMama',
    description:
      'Borsvoeding huis- of hospitaalbesoeke met Annette Nel, LC (CBI). Stellenbosch-basis; reis na Somerset-Wes, Paarl, Franschhoek, Strand en omgewing.',
    h1: 'Huisbesoeke vir borsvoeding — Stellenbosch & Wes-Kaap',
    lead:
      '’n 60–90 minute huis- of hospitaalbesoek: voeding waarneming, mondassessering waar nodig, praktiese demonstrasies, sorgplan, en WhatsApp-opvolg.',
    type: 'service',
    serviceKey: 'home',
    body: [
      'As dit te veel is om met ’n pasgebore baba uit te gaan, kom ek na jou. Ons werk deur aanhaking, gemak, melk-oordrag en jou doelwitte by jou tuis.',
      `Gebiede wat ek gereeld dek: ${SERVICE_AREAS.join(', ')}.`,
      'Reisfooie geld verder as 10 km vanaf Stellenbosch teen R3.25/km.',
      'Jy kan ook ’n aanlyn konsultasie of Stellenbosch besoek bespreek.',
    ],
    faqs: [
      {
        q: 'Hoe lank is ’n huisbesoek?',
        a: 'Gewoonlik 60–90 minute, plus teks-opvolg ná die sessie.',
      },
    ],
  },
  {
    id: 'aanlyn-af',
    path: '/af/aanlyn-konsultasie/',
    lang: 'af',
    hreflangPath: '/online-consultation/',
    title: 'Aanlyn borsvoeding konsultasie Suid-Afrika | PerleMama Lactation',
    description:
      'Virtuele borsvoeding konsultasie met Annette Nel, LC (CBI). 60-minute video oral in Suid-Afrika, met sorgplan en WhatsApp-opvolg.',
    h1: 'Aanlyn borsvoeding konsultasie — Suid-Afrika',
    lead:
      '’n 60-minute videosessie vir aanhaking, melkvoorraad, pomp, mastitis-kommer, terug werk toe, en meer — sonder om huis te verlaat.',
    type: 'service',
    serviceKey: 'online',
    body: [
      'Aanlyn sessies sluit waar moontlik ’n voeding waarneming in, duidelike volgende stappe, hulpbronne, sessienotas, en teks-opvolg.',
      'Ouers regoor Suid-Afrika gebruik video wanneer ’n huisbesoek nie prakties is nie. Tariewe op aanvraag via WhatsApp.',
    ],
    faqs: [
      {
        q: 'Werk aanlyn hulp regtig?',
        a: 'Baie pomp-, voorraad- en posisie-vrae werk goed op video. As ’n hands-on assessering nodig is, beplan ons ’n huis- of Stellenbosch besoek.',
      },
    ],
  },
  {
    id: 'kliniek-af',
    path: '/af/stellenbosch-kliniek/',
    lang: 'af',
    hreflangPath: '/stellenbosch-clinic/',
    title: 'Borsvoeding konsultant Stellenbosch | PerleMama Lactation',
    description:
      'Persoonlike borsvoeding konsultasies met Annette Nel, LC (CBI) by haar Stellenbosch tuiskantoor. Parkering, ure, en bespreking via WhatsApp.',
    h1: 'Borsvoeding konsultant in Stellenbosch — kom na my',
    lead:
      '60–80 minute by my Stellenbosch huis & kantoor: voeding waarneming, mondassessering, praktiese demos, sorgplan, en WhatsApp-opvolg.',
    type: 'service',
    serviceKey: 'clinic',
    body: [
      'Adres: Stellenbosch, Wes-Kaap (presiese besonderhede wanneer jy bespreek).',
      'Parkering: naby beskikbaar — vra wanneer jy bevestig.',
      'Ure: volgens afspraak via WhatsApp.',
    ],
    faqs: [
      {
        q: 'Waar is die praktyk?',
        a: 'By my tuiskantoor in Stellenbosch. Volledige adres word gestuur wanneer jy bespreek.',
      },
    ],
  },
  {
    id: 'about-af',
    path: '/af/oor-my/',
    lang: 'af',
    hreflangPath: '/about/',
    title: 'Oor Annette Nel, LC (CBI) | PerleMama Lactation Stellenbosch',
    description:
      'Ontmoet Annette Nel, Lactation Counselor (LC, CBI) en La Leche League SA-leier in Stellenbosch. Tweetalige borsvoeding ondersteuning.',
    h1: 'Haai, ek is Annette',
    lead:
      'Ma van twee, Lactation Counselor (LC, CBI), en La Leche League SA-leier vir Stellenbosch. Ek help mammas om met gemak en selfvertroue te borsvoed.',
    type: 'about',
    body: [
      'Ek het my Lactation Counselor (LC, CBI) sertifisering via Childbirth International behaal — opleiding én beradingsure, etiek en kommunikasie.',
      'Ek is die Stellenbosch La Leche League SA-leier en help met bewysgebaseerde portuurgroepe soos Breasties op Facebook.',
      'Spesiale belangstellings: refluks, allergie-bestuur, vrugbaarheid tydens borsvoeding, sagte speen, ekologiese borsvoeding, terug werk toe pomp, en bygewerkte mastitis-sorg.',
      'Ek is nie ’n IBCLC nie. Waar mediese of IBCLC-vlak sorg nodig is, verwys ek verder.',
    ],
    faqs: [],
  },
  {
    id: 'book-af',
    path: '/af/boek/',
    lang: 'af',
    hreflangPath: '/book/',
    title: 'Bespreek ’n borsvoeding konsultasie | PerleMama Lactation',
    description:
      'Bespreek ’n huisbesoek, aanlyn sessie of Stellenbosch besoek met Annette Nel. WhatsApp of kort vorm — baba se ouderdom, hoofkwessie, voorkeur.',
    h1: 'Bespreek ’n konsultasie',
    lead:
      'Deel ’n paar besonderhede en ek antwoord op WhatsApp met beskikbaarheid en tariewe. Dringende pyn of koors: kontak eers jou GP of nooddienste.',
    type: 'book',
  },
  {
    id: 'resources-af',
    path: '/af/hulpbronne/',
    lang: 'af',
    hreflangPath: '/resources/',
    title: 'Borsvoeding hulp onderwerpe | PerleMama Lactation',
    description:
      'Hulp met seer tepels, lae melkvoorraad, mastitis, tongbandjie, pomp by die werk, en baba se gewig — met besprekings-CTAs.',
    h1: 'Borsvoeding hulp onderwerpe',
    lead:
      'Praktiese bladsye oor algemene uitdagings. Elkeen eindig met hoe om ’n huisbesoek, aanlyn of Stellenbosch sessie te bespreek.',
    type: 'resources',
  },

  // ——— AF problem pages ———
  {
    id: 'seer-tepels-af',
    path: '/af/seer-tepels/',
    lang: 'af',
    hreflangPath: '/painful-latch/',
    title: 'Seer tepels & pynlike aanhaking | PerleMama Lactation',
    description:
      'Seer tepels en pynlike latch is algemeen — en oplosbaar met die regte hulp. Bespreek ’n huisbesoek of aanlyn sessie met Annette Nel, LC (CBI).',
    h1: 'Seer tepels en pynlike aanhaking',
    lead:
      'Borsvoeding moet nie beteken jy vrees elke voeding nie. Ondiepe aanhaking, posisie, tongfunksie en engorgement dryf dikwels tepelpyn — ’n konsultasie kan dit uitklaar.',
    type: 'problem',
    body: [
      'Seer, gekraakte of vervormde tepels ná voeding beteken dikwels baba kry nie ’n diep genoeg mondvol borste nie. Pyn dwarsdeur die voeding is ’n teken om hulp te kry.',
      'In ’n sessie kyk ons na aanhaking en posisie, mondfunksie waar nodig, en bou ’n plan vir die volgende voeding.',
      'Hierdie bladsy is opvoedkundige ondersteuning, nie noodgeval-sorg nie. Koors of ernstige siekte: sien ’n dokter.',
    ],
    faqs: [
      {
        q: 'Is tepelpyn normaal?',
        a: 'Ligte aanpassing die eerste dae kan gebeur; aanhoudende of erge pyn hoef jy nie te verdra nie.',
      },
    ],
  },
  {
    id: 'lae-melk-af',
    path: '/af/lae-melkvoorraad/',
    lang: 'af',
    hreflangPath: '/low-milk-supply/',
    title: 'Lae melkvoorraad hulp | PerleMama Lactation',
    description:
      'Bekommerd oor te min melk? Waargenome lae voorraad is algemeen. Kry ’n duidelike plan met Annette Nel — huis, kliniek of aanlyn.',
    h1: 'Lae melkvoorraad — en waargenome lae voorraad',
    lead:
      'Baie mammas worry hulle het nie genoeg melk nie wanneer baba cluster-feed. Ons skei ware voorraadprobleme van normale baba-gedrag.',
    type: 'problem',
    body: [
      'Ware lae voorraad en waargenome lae voorraad vra verskillende benaderings. Doeltreffende, gereelde melkverwydering is die basis.',
      'Ons kyk na voedingsfrekwensie, aanhaking, nat luiers, gewig, en pomp as jy dit gebruik.',
    ],
    faqs: [],
  },
  {
    id: 'mastitis-af',
    path: '/af/mastitis/',
    lang: 'af',
    hreflangPath: '/mastitis/',
    title: 'Mastitis & verstopte melkkanaal | PerleMama Lactation',
    description:
      'Mastitis en verstopte kanale: bygewerkte sorg (koue, rus, aanhou voed). Hulp van Annette Nel in Stellenbosch of aanlyn. Sien ’n dokter as jy siek voel.',
    h1: 'Mastitis en verstopte melkkanaal',
    lead:
      'Ou raad om “warm te maak en hard te masseer” is verouderd. Hedendaagse benaderings fokus op inflammasie verminder, aanhou voed, en die regte kliniese steun.',
    type: 'problem',
    body: [
      'Koors, rooi strepe of ernstige siekte: kontak eers ’n dokter. Borsvoeding-ondersteuning werk saam met mediese sorg.',
      'In ’n konsultasie kyk ons na aanhaking, dreinasie en praktiese gemaksmaatreëls volgens huidige protokolle.',
    ],
    faqs: [],
  },
  {
    id: 'tongbandjie-af',
    path: '/af/tongbandjie/',
    lang: 'af',
    hreflangPath: '/tongue-tie/',
    title: 'Tongbandjie en borsvoeding | PerleMama Lactation',
    description:
      'Tongbandjie kan aanhaking beïnvloed — nie elke bandjie hoef gesny te word nie. Voedingsassessering met Annette Nel, Stellenbosch & aanlyn.',
    h1: 'Tongbandjie en voeding',
    lead:
      'Klikkende voedings, tepelskade en swak oordrag het baie oorsake. Orale beperkings is een moontlikheid — assessering kom vóór ’n prosedure.',
    type: 'problem',
    body: [
      'Nie elke tongbandjie veroorsaak probleme nie, en nie elke voedingsprobleem is ’n tongbandjie nie. Ons assessseer funksie by die bors eers.',
      'Ek doen nie freenotomie nie. Ek steun voeding en verwys wanneer ’n prosedure oorweeg moet word.',
    ],
    faqs: [],
  },
  {
    id: 'terug-werk-af',
    path: '/af/terug-werk-toe/',
    lang: 'af',
    hreflangPath: '/returning-to-work-pumping/',
    title: 'Terug werk toe & pomp | PerleMama Lactation',
    description:
      'Terug-werk-toe borsvoeding: pompkeuse, flange-pas, skedule, en voorraad beskerm. Aanlyn of in Stellenbosch met Annette Nel.',
    h1: 'Terug werk toe en pomp',
    lead:
      'Terug werk toe hoef nie borsvoeding te eindig nie. Ons kies ’n pompbenadering, flange-pas, en ’n realistiese skedule.',
    type: 'problem',
    body: [
      'Sessies dek pompkeuse, flange-grootte, berging, paced bottle, en voorraad op werksdae.',
      'Gewild as ’n gefokusde aanlyn sessie oral in Suid-Afrika, of persoonlik in Stellenbosch.',
    ],
    faqs: [],
  },
  {
    id: 'baba-gewig-af',
    path: '/af/baba-gewig/',
    lang: 'af',
    hreflangPath: '/newborn-weight-gain/',
    title: 'Baba nie genoeg gewig nie | PerleMama Lactation',
    description:
      'Bekommerd oor jou baba se gewig met borsvoeding? Kry ’n voedingsassessering met Annette Nel. Soek dringend sorg as baba siek is.',
    h1: 'Baba kry nie genoeg gewig nie',
    lead:
      'Gewigskommer is stresvol. Ons assessseer melk-oordrag, aanhaking, voedingsfrekwensie en luiers — saam met jou pediater toe se raad.',
    type: 'problem',
    body: [
      'Stadige gewigstoename het baie oorsake. ’n Voeding waarneming maak volgende stappe duidelik.',
      'As baba lusteloos is of jou klinikus bekommerd is, volg mediese raad dadelik.',
    ],
    faqs: [],
  },
]

export function getPageByPath(pathname) {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname : pathname === '/' ? '/' : `${pathname}/`
  return pages.find((p) => p.path === normalized || p.path === pathname)
}

export function getProblemPages(lang) {
  return pages.filter((p) => p.type === 'problem' && p.lang === lang)
}

export function getServicePages(lang) {
  return pages.filter((p) => p.type === 'service' && p.lang === lang)
}

export function absoluteUrl(path) {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.endsWith('/') ? path : `${path}/`}`
}
