import { GALLERY_PROJECTS } from '../data/gallery.ts'
import { SERVICE_DETAILS } from '../data/serviceDetails.ts'

export const SITE_URL = 'https://theglassdoctor.ae'
export const SITE_NAME = 'The Glass Doctor'

export const HOME_TITLE = 'The Glass Doctor | Glass & Architectural Solutions UAE'
export const HOME_DESCRIPTION =
  'The Glass Doctor — Excellence Through Transparency. Premium glass and architectural solutions for residential, commercial and architectural projects across the UAE.'

const DEFAULT_OG_IMAGE = 'ProductsImage/img19.jpg'

export type Route =
  | { type: 'home' }
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

export function getRouteMeta(rawPath: string): RouteMeta {
  const route = matchRoute(rawPath)

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
    ...SERVICE_DETAILS.map((s) => servicePath(s.id)),
    ...GALLERY_PROJECTS.map((p) => projectPath(p.id)),
  ]
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`
export const absoluteImage = (image: string) => `${SITE_URL}/${encodeURI(image)}`
