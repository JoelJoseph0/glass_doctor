import { useState } from 'react'
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

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId)
  }

  const handleBackToGallery = () => {
    setSelectedProjectId(null)
  }

  // Show project detail page if a project is selected
  if (selectedProjectId) {
    return (
      <>
        <Navigation />
        <ProjectDetailPage projectId={selectedProjectId} onClose={handleBackToGallery} />
        <Footer />
        <BackToTop />
      </>
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