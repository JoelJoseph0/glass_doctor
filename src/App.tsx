import { useEffect, useRef, useState, type MouseEvent } from 'react'
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

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const pendingScroll = useRef<string | null>(null)

  // Keep the browser Back/Forward buttons in sync with the open project
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      pendingScroll.current ??= '#gallery'
      setSelectedProjectId(e.state?.projectId ?? null)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // After returning to the main page, scroll to the requested section
  useEffect(() => {
    if (selectedProjectId !== null || !pendingScroll.current) return
    const target = pendingScroll.current
    pendingScroll.current = null
    const timer = setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    return () => clearTimeout(timer)
  }, [selectedProjectId])

  const handleProjectClick = (projectId: string) => {
    window.history.pushState({ projectId }, '')
    setSelectedProjectId(projectId)
  }

  const goToSection = (hash: string) => {
    pendingScroll.current = hash
    if (window.history.state?.projectId) {
      // popstate handler clears the project
      window.history.back()
    } else {
      setSelectedProjectId(null)
    }
  }

  const handleBackToGallery = () => goToSection('#gallery')

  // On the project page, in-page anchors (nav, footer, CTA) lead back to the main page sections
  const handleAnchorClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a')
    const href = anchor?.getAttribute('href')
    if (!href || href.length < 2 || !href.startsWith('#')) return
    e.preventDefault()
    goToSection(href)
  }

  // Show project detail page if a project is selected
  if (selectedProjectId) {
    return (
      <div onClick={handleAnchorClick}>
        <Navigation />
        <ProjectDetailPage projectId={selectedProjectId} onClose={handleBackToGallery} />
        <Footer />
        <BackToTop />
      </div>
    )
  }

  // Show main website
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ProductsSection />
      <ApplicationsSection />
      <GallerySection onProjectClick={handleProjectClick} />
      <BrandStatement />
      <ProcessSection />
      <WhyUsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  )
}