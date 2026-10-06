/**
 * Post-build step: turns dist/index.html into one static HTML file per route
 * (own <title>, description, canonical, social tags, JSON-LD and crawlable
 * content), and writes sitemap.xml, robots.txt and the 404.html fallback.
 *
 * Run with: node scripts/prerender.ts  (Node 22.18+ runs TypeScript directly)
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { GALLERY_PROJECTS } from '../src/data/gallery.ts'
import { SERVICE_DETAILS } from '../src/data/serviceDetails.ts'
import {
  SITE_NAME,
  SITE_URL,
  absoluteImage,
  absoluteUrl,
  getAllPaths,
  getRouteMeta,
  matchRoute,
  projectPath,
  servicePath,
} from '../src/seo/routes.ts'

const dist = join(import.meta.dirname, '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf-8')

const esc = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const jsonLd = (data: object) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

const business = {
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: absoluteImage('Logo.png'),
  logo: absoluteImage('Logo.png'),
  telephone: '+971502597995',
  email: 'sales@theglassdoctor.ae',
  description:
    'Glass tempering, partitions, laminated and smart glass, double glazed units, curtain walls and aluminium works in Sharjah, serving all of the UAE.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sharjah',
    addressCountry: 'AE',
  },
  areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
}

function structuredData(path: string): string {
  const route = matchRoute(path)
  const meta = getRouteMeta(path)

  if (route.type === 'home') {
    return jsonLd({ '@context': 'https://schema.org', ...business })
  }

  const pageCrumbs = (name: string, extra: { name: string; path: string }[] = []) =>
    jsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: 'Home', path: '/' }, ...extra, { name, path: meta.path }].map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    })

  if (route.type === 'about' || route.type === 'contact') {
    return (
      jsonLd({
        '@context': 'https://schema.org',
        '@type': route.type === 'about' ? 'AboutPage' : 'ContactPage',
        name: meta.title,
        url: absoluteUrl(meta.path),
        mainEntity: { '@id': `${SITE_URL}/#business`, ...business },
      }) + pageCrumbs(route.type === 'about' ? 'About Us' : 'Contact')
    )
  }

  if (route.type === 'services' || route.type === 'projects') {
    return pageCrumbs(route.type === 'services' ? 'Services' : 'Projects')
  }

  if (route.type === 'service') {
    return (
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: meta.heading,
        description: meta.description,
        image: absoluteImage(meta.image),
        url: absoluteUrl(meta.path),
        areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
        provider: { '@id': `${SITE_URL}/#business`, ...business },
      }) + pageCrumbs(meta.heading, [{ name: 'Services', path: '/services/' }])
    )
  }

  return pageCrumbs(meta.heading, [{ name: 'Projects', path: '/projects/' }])
}

/** Plain content so crawlers see text and internal links before JS runs. */
function crawlerContent(path: string): string {
  const meta = getRouteMeta(path)
  const route = matchRoute(path)
  let html = `<main><h1>${esc(meta.heading)}</h1><p>${esc(meta.description)}</p>`

  if (route.type === 'service') {
    const service = SERVICE_DETAILS.find((s) => s.id === route.id)!
    html += service.description
      .split('\n\n')
      .map((block) => `<p>${esc(block.trim())}</p>`)
      .join('')
  }

  if (route.type === 'contact') {
    html += '<p>Phone / WhatsApp: <a href="tel:+971502597995">+971 50 259 7995</a></p>'
    html += '<p>Email: <a href="mailto:sales@theglassdoctor.ae">sales@theglassdoctor.ae</a></p>'
    html += '<p>Location: Sharjah, United Arab Emirates. Serving all of UAE.</p>'
    html += '<p>Hours: Monday - Saturday 8:00 AM - 5:00 PM, Sunday closed.</p>'
  }

  if (route.type !== 'notfound') {
    html += '<nav><ul>'
    html += [
      ['/', 'Home'],
      ['/about/', 'About Us'],
      ['/services/', 'Services'],
      ['/projects/', 'Projects'],
      ['/contact/', 'Contact'],
    ]
      .map(([href, label]) => `<li><a href="${href}">${label}</a></li>`)
      .join('')
    html += '</ul><h2>Our Services</h2><ul>'
    html += SERVICE_DETAILS.map((s) => `<li><a href="${servicePath(s.id)}">${esc(s.title)}</a></li>`).join('')
    html += '</ul><h2>Projects</h2><ul>'
    html += GALLERY_PROJECTS.map((p) => `<li><a href="${projectPath(p.id)}">${esc(p.title)}</a></li>`).join('')
    html += '</ul></nav>'
  }

  return `${html}</main>`
}

function render(path: string): string {
  const meta = getRouteMeta(path)
  const url = absoluteUrl(meta.path)
  const image = absoluteImage(meta.image)

  const head = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    structuredData(path),
  ].join('\n    ')

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${esc(meta.description)}" />`,
    )
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${crawlerContent(path)}</div>`)
}

function write(file: string, content: string) {
  const target = join(dist, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, content)
}

const paths = getAllPaths()

for (const path of paths) {
  write(path === '/' ? 'index.html' : `${path.replace(/^\//, '')}index.html`, render(path))
}

// GitHub Pages serves this for unknown URLs; the app renders its own 404 page
write('404.html', template)

const today = new Date().toISOString().slice(0, 10)
const urls = paths
  .map((path) => {
    const priority =
      path === '/' ? '1.0'
      : ['/about/', '/services/', '/projects/', '/contact/'].includes(path) ? '0.9'
      : path.startsWith('/services/') ? '0.8'
      : '0.6'
    return `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

console.log(`Prerendered ${paths.length} pages + sitemap.xml, robots.txt, 404.html`)
