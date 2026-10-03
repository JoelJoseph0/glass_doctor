import { useEffect, useRef, type MouseEvent } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import StatsSection from '@/components/sections/StatsSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ApplicationsSection from '@/components/sections/ApplicationsSection'
import GallerySection from '@/components/sections/GallerySection'
import BrandStatement from '@/components/sections/BrandStatement'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/sections/ContactSection_EmailJS'
import BackToTop from '@/components/common/BackToTop'
import ProjectDetailPage from '@/components/pages/ProjectDetailPage'
import ServicePage from '@/components/pages/ServicePage'
import NotFoundPage from '@/components/pages/NotFoundPage'
import { navigate, usePathname } from '@/router'
import { matchRoute } from '@/seo/routes'
import { usePageMeta } from '@/seo/usePageMeta'

function scrollToHash(hash: string) {
  if (!hash || hash.length < 2) return false
  const target = document.querySelector(hash)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return Boolean(target)
}

export default function App() {
  const pathname = usePathname()
  const route = matchRoute(pathname)
  const previousType = useRef<string | null>(null)

  usePageMeta(pathname)

  // After a route change: scroll to the hash target, back to the gallery
  // when leaving a project, or to the top of the new page.
  useEffect(() => {
    const leftProject = previousType.current === 'project' && route.type === 'home'
    previousType.current = route.type

    const hash = window.location.hash || (leftProject ? '#gallery' : '')
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const timer = setTimeout(() => scrollToHash(hash), 100)
    return () => clearTimeout(timer)
  }, [pathname, route.type])

  // Internal links navigate without a full page load; hash links on
  // sub-pages lead back to the matching home page section.
  const handleClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const anchor = (e.target as HTMLElement).closest('a')
    const href = anchor?.getAttribute('href')
    if (!anchor || !href || anchor.target === '_blank') return

    if (href.startsWith('#')) {
      if (route.type === 'home') return
      e.preventDefault()
      navigate(`/${href}`)
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault()
      navigate(href)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4]" onClick={handleClick}>
      <Navigation key={route.type} />
      {route.type === 'home' && (
        <>
          <HeroSection />
          <IntroSection />
          <StatsSection />
          <ProductsSection />
          <ApplicationsSection />
          <GallerySection />
          <BrandStatement />
          <ProcessSection />
          <WhyUsSection />
          <CTASection />
          <ContactSection />
        </>
      )}
      {route.type === 'service' && <ServicePage serviceId={route.id} />}
      {route.type === 'project' && <ProjectDetailPage key={route.id} projectId={route.id} />}
      {route.type === 'notfound' && <NotFoundPage />}
      <Footer />
      <BackToTop />
    </div>
  )
}
