/**
 * Creates Cloudflare zone + GitHub Pages DNS for perlemamalactation.co.za.
 * Requires CLOUDFLARE_API_TOKEN with Zone:Edit + DNS:Edit (or Account:Create Zone).
 *
 *   set CLOUDFLARE_API_TOKEN=...
 *   node scripts/setup-cloudflare-dns.mjs
 */
const ACCOUNT_ID = 'd0ba0f3b2c5050a7d7e829dc2ce6cea1'
const DOMAIN = 'perlemamalactation.co.za'
const GITHUB_IO = 'peroynel1.github.io'
const A_RECORDS = [
  '185.199.108.153',
  '185.199.109.153',
  '185.199.110.153',
  '185.199.111.153',
]
const AAAA_RECORDS = [
  '2606:50c0:8000::153',
  '2606:50c0:8001::153',
  '2606:50c0:8002::153',
  '2606:50c0:8003::153',
]

const token = process.env.CLOUDFLARE_API_TOKEN
if (!token) {
  console.error('Set CLOUDFLARE_API_TOKEN first (Zone Edit + DNS Edit).')
  process.exit(1)
}

async function cf(path, { method = 'GET', body } = {}) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const json = await res.json()
  if (!json.success) {
    const msg = JSON.stringify(json.errors || json, null, 2)
    throw new Error(`${method} ${path} failed:\n${msg}`)
  }
  return json.result
}

async function ensureRecord(zoneId, record) {
  const q = new URLSearchParams({
    type: record.type,
    name: record.name,
    content: record.content,
  })
  const existing = await cf(`/zones/${zoneId}/dns_records?${q}`)
  if (existing.length) {
    console.log(`exists ${record.type} ${record.name} -> ${record.content}`)
    return existing[0]
  }
  const created = await cf(`/zones/${zoneId}/dns_records`, {
    method: 'POST',
    body: { ...record, ttl: 1, proxied: false },
  })
  console.log(`created ${record.type} ${record.name} -> ${record.content}`)
  return created
}

const listed = await cf(`/zones?name=${DOMAIN}`)
let zone = listed[0]
if (!zone) {
  console.log(`Creating zone ${DOMAIN}...`)
  zone = await cf('/zones', {
    method: 'POST',
    body: {
      name: DOMAIN,
      account: { id: ACCOUNT_ID },
      jump_start: false,
      type: 'full',
    },
  })
} else {
  console.log(`Zone already exists: ${zone.id} (${zone.status})`)
}

for (const ip of A_RECORDS) {
  await ensureRecord(zone.id, { type: 'A', name: DOMAIN, content: ip })
}
for (const ip of AAAA_RECORDS) {
  await ensureRecord(zone.id, { type: 'AAAA', name: DOMAIN, content: ip })
}
await ensureRecord(zone.id, {
  type: 'CNAME',
  name: `www.${DOMAIN}`,
  content: GITHUB_IO,
})

const refreshed = await cf(`/zones/${zone.id}`)
console.log('\n=== Absolute Hosting: set these nameservers ===')
for (const ns of refreshed.name_servers || zone.name_servers || []) {
  console.log(ns)
}
console.log('\nAlso clear serverHold with Absolute Hosting if WHOIS still shows it.')
console.log(`Zone status: ${refreshed.status}`)
