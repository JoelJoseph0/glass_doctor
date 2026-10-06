import { GALLERY_PROJECTS } from '../data/gallery.ts'
import { SERVICE_DETAILS } from '../data/serviceDetails.ts'

export const SITE_URL = 'https://theglassdoctor.ae'
export const SITE_NAME = 'The Glass Doctor'

export const HOME_TITLE = 'The Glass Doctor | Glass & Architectural Solutions UAE'
export const HOME_DESCRIPTION =
  'The Glass Doctor — Excellence Through Transparency. Premium glass and architectural solutions for residential, commercial and architectural projects across the UAE.'

const DEFAULT_OG_IMAGE = 'ProductsImage/img19.jpg'

export type StaticPage = 'about' | 'contact' | 'services' | 'projects'

export type Route =
  | { type: 'home' }
  | { type: StaticPage }
  | { type: 'service'; id: string }
  | { type: 'project'; id: string }
  | { type: 'notfound' }

export interface RouteMeta {
  path: string
  title: string
  description: string
  image: string
  heading: string
  noindex?: boolean
}

export function normalizePath(path: string): string {
  const clean = path.split('#')[0].split('?')[0].replace(/\/+$/, '')
  return clean || '/'
}

export function matchRoute(rawPath: string): Route {
  const path = normalizePath(rawPath)
  if (path === '/') return { type: 'home' }
  if (path === '/about') return { type: 'about' }
  if (path === '/contact') return { type: 'contact' }
  if (path === '/services') return { type: 'services' }
  if (path === '/projects') return { type: 'projects' }

  const service = path.match(/^\/services\/([^/]+)$/)
  if (service && SERVICE_DETAILS.some((s) => s.id === service[1])) {
    return { type: 'service', id: service[1] }
  }

  const project = path.match(/^\/projects\/([^/]+)$/)
  if (project && GALLERY_PROJECTS.some((p) => p.id === project[1])) {
    return { type: 'project', id: project[1] }
  }

  return { type: 'notfound' }
}

export const servicePath = (id: string) => `/services/${id}/`
export const projectPath = (id: string) => `/projects/${id}/`

const STATIC_PAGES: Record<StaticPage, RouteMeta> = {
  about: {
    path: '/about/',
    title: `About Us – Glass Company in Sharjah, UAE | ${SITE_NAME}`,
    description:
      'Meet The Glass Doctor: a Sharjah-based glass and aluminium company delivering tempered, laminated, smart and decorative glass for homes and businesses across the UAE.',
    image: 'ProductsImage/img20.jpg',
    heading: 'About The Glass Doctor',
  },
  contact: {
    path: '/contact/',
    title: `Contact Us – Get a Glass Quote in Sharjah & UAE | ${SITE_NAME}`,
    description:
      'Contact The Glass Doctor in Sharjah for a free quote on glass partitions, tempered glass, curtain walls and more. Call or WhatsApp +971 50 259 7995.',
    image: DEFAULT_OG_IMAGE,
    heading: 'Contact The Glass Doctor',
  },
  services: {
    path: '/services/',
    title: `Glass & Aluminium Services in UAE | ${SITE_NAME}`,
    description:
      'Glass tempering and bending, partitions, laminated and smart glass, double glazed units, decorative glass, curtain walls and aluminium works across the UAE.',
    image: 'ProductsImage/img1.jpg',
    heading: 'Our Glass & Aluminium Services',
  },
  projects: {
    path: '/projects/',
    title: `Our Projects – Glass Installations in UAE | ${SITE_NAME}`,
    description:
      'Explore completed glass installations by The Glass Doctor across the UAE: commercial and residential partitions, elevator glass, facades and interior glass works.',
    image: 'ProductGallery/Pr1/img1.jpg',
    heading: 'Our Projects',
  },
}

export function getRouteMeta(rawPath: string): RouteMeta {
  const route = matchRoute(rawPath)

  if (route.type in STATIC_PAGES) {
    return STATIC_PAGES[route.type as StaticPage]
  }

  if (route.type === 'service') {
    const s = SERVICE_DETAILS.find((x) => x.id === route.id)!
    return {
      path: servicePath(s.id),
      title: `${s.title} UAE | ${SITE_NAME}`,
      description: s.metaDescription,
      image: s.image,
      heading: s.title,
    }
  }

  if (route.type === 'project') {
    const p = GALLERY_PROJECTS.find((x) => x.id === route.id)!
    return {
      path: projectPath(p.id),
      title: `${p.title} – ${p.category} Glass Project | ${SITE_NAME}`,
      description: p.description,
      image: p.coverImage,
      heading: p.title,
    }
  }

  if (route.type === 'notfound') {
    return {
      path: '/',
      title: `Page not found | ${SITE_NAME}`,
      description: HOME_DESCRIPTION,
      image: DEFAULT_OG_IMAGE,
      heading: 'Page not found',
      noindex: true,
    }
  }

  return {
    path: '/',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    image: DEFAULT_OG_IMAGE,
    heading: 'The Glass Doctor',
  }
}

/** Every indexable path, used for pre-rendering and the sitemap. */
export function getAllPaths(): string[] {
  return [
    '/',
    '/about/',
    '/services/',
    ...SERVICE_DETAILS.map((s) => servicePath(s.id)),
    '/projects/',
    ...GALLERY_PROJECTS.map((p) => projectPath(p.id)),
    '/contact/',
  ]
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`
export const absoluteImage = (image: string) => `${SITE_URL}/${encodeURI(image)}`
