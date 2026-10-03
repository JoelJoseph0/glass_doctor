import { useEffect } from 'react'
import { absoluteImage, absoluteUrl, getRouteMeta } from './routes'

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function metaTag(key: 'name' | 'property', name: string, content: string) {
  upsert(
    `meta[${key}="${name}"]`,
    () => {
      const el = document.createElement('meta')
      el.setAttribute(key, name)
      return el
    },
    'content',
    content,
  )
}

export function usePageMeta(path: string) {
  useEffect(() => {
    const m = getRouteMeta(path)
    const url = absoluteUrl(m.path)
    const image = absoluteImage(m.image)

    document.title = m.title
    metaTag('name', 'description', m.description)
    metaTag('name', 'robots', m.noindex ? 'noindex' : 'index,follow')
    upsert(
      'link[rel="canonical"]',
      () => {
        const el = document.createElement('link')
        el.setAttribute('rel', 'canonical')
        return el
      },
      'href',
      url,
    )

    metaTag('property', 'og:type', 'website')
    metaTag('property', 'og:site_name', 'The Glass Doctor')
    metaTag('property', 'og:title', m.title)
    metaTag('property', 'og:description', m.description)
    metaTag('property', 'og:url', url)
    metaTag('property', 'og:image', image)
    metaTag('name', 'twitter:card', 'summary_large_image')
    metaTag('name', 'twitter:title', m.title)
    metaTag('name', 'twitter:description', m.description)
    metaTag('name', 'twitter:image', image)
  }, [path])
}
